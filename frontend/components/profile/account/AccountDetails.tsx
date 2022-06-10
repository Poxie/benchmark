import { useMutation } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import { UPDATE_USER } from '../../../graphql/mutations';
import { useAppSelector } from '../../../redux/store';
import { selectUserInfo } from '../../../redux/user/selectors';
import { User } from '../../../redux/user/types';
import styles from '../../../styles/Account.module.scss';
import { Button } from '../../button';
import { Input } from '../../input';
import { AccountCard } from './AccountCard';

type CurrentStateType = {
    id: string;
    username: string;
    name?: string;
    currentPassword?: string;
    newPassword?: string;
}
type CurrentStateKeys = keyof CurrentStateType;

export const AccountDetails = () => {
    const [saving, setSaving] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    const info = useAppSelector(selectUserInfo);
    const [currentState, setCurrentState] = useState({...info} as CurrentStateType);
    const [updateUser] = useMutation(UPDATE_USER);
    if(!info) return null;

    // Updating local states
    const update = (property: CurrentStateKeys, value: string) => {
        setCurrentState(prev => {
            const newState = {
                ...prev,
                [property]: value
            };
            if(!value) delete newState[property];
            return newState;
        })
        
        // Removing error messages on input change
        setFeedback(null);
    }

    // Saving changes
    const save = async () => {
        if(!currentState) return;

        // Updatins saving state
        setSaving(true);

        // Checking what properties need updating
        const properties: {[key: string]: string | undefined} = {};
        Object.entries(currentState).forEach(([property, value]) => {
            // Checking if should update, i.e., it's been changed
            const prop = property as keyof typeof info;
            if(info[prop] !== value) {
                properties[prop] = value;
            }
        })

        // Updating properties
        await updateUser({ variables: {
            input: {
                id: info.id,
                ...properties
            }
        } }).then(({ data }) => {
            // Request is successful
            const user: User = data?.updateUser;
    
            // Checking if username has been updated
            if(user.username !== info.username) {
                setTimeout(() => {
                    window.location.href = `/profile/${user.username}/account`;
                }, 100)
                return;
            }

            // Setting feedback
            setFeedback(`Update was successful.`);
        }).catch(error => setFeedback(error.message));

        // Updating saving state
        setSaving(false);
    }

    // Comparing states
    const isAllowed = (prev: typeof info, newState: CurrentStateType) => {
        let allowed = true;
        if(JSON.stringify(prev) === JSON.stringify(newState)) allowed = false;
        if(newState.currentPassword && !newState.newPassword || !newState.currentPassword && newState.newPassword) allowed = false;
        return allowed;
    }

    const saveAllowed = isAllowed(info, currentState);
    return(
        <AccountCard
            header={'Account Login Details'}
            description={'Update details required for a login to occur, i.e., username and password.'}
        >
            <Input 
                label={'Username'}
                placeholder={'New username...'}
                value={info.username}
                inputClassName={styles['input']}
                onChange={value => update('username', value)}
            />

            <div className={styles['password']}>
                <Input 
                    type={'password'}
                    label={'Current password'}
                    name={'current-password'}
                    placeholder={'Current password...'}
                    inputClassName={styles['input']}
                    onChange={value => update('currentPassword', value)}
                />
                <Input 
                    type={'password'}
                    label={'New password'}
                    name={'new-password'}
                    placeholder={'New password...'}
                    inputClassName={styles['input']}
                    onChange={value => update('newPassword', value)}
                />
            </div>

            <div className={styles['button-container']}>
                {feedback && (
                    <span>
                        {feedback}
                    </span>
                )}

                <Button 
                    onClick={save}
                    disabled={!saveAllowed}
                >
                    {saving ? 'Saving Changes...' : 'Save Changes'}
                </Button>
            </div>
        </AccountCard>
    )
}
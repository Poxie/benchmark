import React, { useId } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../redux/store';
import { selectUserInfo } from '../../redux/user/selectors';
import { usePopup } from '../../contexts/PopupProvider';
import { SettingsPopup } from '../settings/SettingsPopup';
import { PopupGroup } from '../PopupGroup';
import { ItemType } from '../PopupItem';

export const NavbarUserPopup = () => {
    const router = useRouter();
    const { pushPopup } = usePopup();
    const username = useAppSelector(selectUserInfo)?.username;

    const redirect = (path: string) => router.push(path);
    
    const logout = () => {
        window.localStorage.removeItem('token');
        window.location.reload();
    }

    const groups = [
        [
            { text: 'Profile', onClick: () => redirect(`/profile/${username}/overview`) },
        ],
        [
            { text: 'Account', onClick: () => redirect(`/profile/${username}/account`) },
            { text: 'Log out', type: 'danger', onClick: logout }
        ]
    ] as ItemType[][];
    return(
        <>
            {groups.map((group, key) => (
                <PopupGroup items={group} key={`group-${key}`} />
            ))}
        </>
    )
}
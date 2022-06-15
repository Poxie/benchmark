import React, { useRef } from 'react';
import styles from '../../styles/Navbar.module.scss';
import { useRouter } from 'next/router';
import { GearIcon } from '../../icons/GearIcon';
import { useAppSelector } from '../../redux/store';
import { selectUserInfo, selectUserIsLoading } from '../../redux/user/selectors';
import { Button } from '../button';
import { NavbarUser } from './NavbarUser';
import { usePopup } from '../../contexts/PopupProvider';
import { SettingsPopup } from '../../popups/settings/SettingsPopup';

export const NavbarOptions = () => {
    const router = useRouter();
    const { setPopup } = usePopup();
    const settingsRef = useRef<HTMLDivElement>(null);
    const loading = useAppSelector(selectUserIsLoading);
    const userInfo = useAppSelector(selectUserInfo);

    // Return null while user is loading
    if(loading) return null;

    return(
        <div className={styles['right']}>
            <div 
                className={styles['settings-button']} 
                onClick={() => setPopup(<SettingsPopup />, settingsRef)}
                ref={settingsRef}
            >
                <GearIcon />
            </div>
            {userInfo ? (
                <NavbarUser user={userInfo} />
            ) : (
                <Button onClick={() => router.push(`/login?redirect_uri=${encodeURIComponent(router.asPath)}`)}>
                    Sign in
                </Button>
            )}
        </div>
    )
}
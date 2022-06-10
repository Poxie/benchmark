import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDeviceType } from '../../../hooks/useDeviceType';
import styles from '../../../styles/Profile.module.scss';
import { ProfileSidebarTabs } from './ProfileSidebarSections';
import { ProfileSidebarTop } from './ProfileSidebarTop';

export const ProfileSidebar = () => {
    const [active, setActive] = useState(false);
    const gameId = useRouter().query.gameId;
    const device = useDeviceType();

    // Toggling active state on smaller devices
    const toggleActive = () => setActive(!active);
    const close = () => setActive(false);

    // Closing if user press tab
    useEffect(close, [gameId]);

    // Closing if user screen extends
    useEffect(() => {
        if(device === 'computer') close();
    }, [device]);

    // Determining sidebar className
    const className = [
        styles['sidebar'],
        active ? styles['active'] : ''
    ].join(' ');
    return(
        <div className={className}>
            <div className={styles['sidebar-content']}>
                <ProfileSidebarTop 
                    onClick={device !== 'computer' ? toggleActive : undefined}
                />
                <ProfileSidebarTabs />
            </div>
        </div>
    )
}
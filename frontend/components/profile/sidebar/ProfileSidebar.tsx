import React from 'react';
import { selectProfileIdentity, selectProfileIsLoading } from '../../../redux/profile/selectors';
import { useAppSelector } from '../../../redux/store';
import styles from '../../../styles/Profile.module.scss';
import { ProfileSidebarTabs } from './ProfileSidebarSections';

export const ProfileSidebar = () => {
    const loading = useAppSelector(selectProfileIsLoading);
    const identity = useAppSelector(selectProfileIdentity);

    if(loading || !identity) return null;
    
    return(
        <div className={styles['sidebar']}>
            <div className={styles['sidebar-content']}>
                <div className={styles['sidebar-top']}>
                    <div className={styles['avatar']}>
                        ?
                    </div>
                    <span className={styles['username']}>
                        {identity.username}
                    </span>
                </div>
                <ProfileSidebarTabs />
            </div>
        </div>
    )
}
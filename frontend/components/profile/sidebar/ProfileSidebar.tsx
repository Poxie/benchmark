import React from 'react';
import styles from '../../../styles/Profile.module.scss';
import { ProfileSidebarTabs } from './ProfileSidebarSections';
import { ProfileSidebarTop } from './ProfileSidebarTop';

export const ProfileSidebar = () => {
    return(
        <div className={styles['sidebar']}>
            <div className={styles['sidebar-content']}>
                <ProfileSidebarTop />
                <ProfileSidebarTabs />
            </div>
        </div>
    )
}
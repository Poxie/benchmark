import React from 'react';
import styles from '../../styles/Profile.module.scss';
import { ProfileOverview } from './overview/ProfileOverview';
import { ProfileSidebar } from './sidebar/ProfileSidebar';

export const Profile = () => {
    return(
        <div className={styles['container']}>
            <ProfileSidebar />
            <ProfileOverview />
        </div>
    )
}
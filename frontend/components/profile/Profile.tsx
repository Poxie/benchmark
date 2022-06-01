import React from 'react';
import styles from '../../styles/Profile.module.scss';
import { ProfileOverview } from './ProfileOverview';
import { ProfileSidebar } from './ProfileSidebar';

export const Profile = () => {
    return(
        <div className={styles['container']}>
            <ProfileSidebar />
            <ProfileOverview />
        </div>
    )
}
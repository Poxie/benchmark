import React from 'react';
import { ProfileSidebar } from '../components/profile/sidebar/ProfileSidebar';
import styles from '../styles/Profile.module.scss';

export const ProfileLayout: React.FC<{children: any}> = ({ children }) => {
    return(
        <div className={styles['container']}>
            <ProfileSidebar />
            <div className={styles['main']}>
                {children}
            </div>
        </div>
    )
}
import React from 'react';
import styles from '../../../styles/Profile.module.scss';
import { ProfileOverviewCard } from './ProfileOverviewCard';
import { ProfileOverviewCards } from './ProfileOverviewCards';
import { ProfileOverviewHighScores } from './ProfileOverviewHighScores';

export const ProfileOverview = () => {
    return(
        <div className={styles['overview-container']}>
            <ProfileOverviewCards />
            <ProfileOverviewHighScores />
        </div>
    )
}
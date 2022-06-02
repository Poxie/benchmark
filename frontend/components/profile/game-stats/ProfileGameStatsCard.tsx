import React from 'react';
import styles from '../../../styles/ProfileGameStats.module.scss';

export const ProfileGameStatsCard: React.FC<{
    label: string;
    text: string;
}> = ({ label, text }) => {
    return(
        <div className={styles['card']}>
            <span className={styles['card-label']}>
                {label}
            </span>
            
            <h2>
                {text}
            </h2>
        </div>
    )
}
import React from 'react';
import styles from '../../../styles/Profile.module.scss';

export const ProfileOverviewCard: React.FC<{
    title: string;
    description: string;
}> = ({ title, description }) => {
    return(
        <div className={styles['overview-card']}>
            <h1>
                {title}
            </h1>
            <span>
                {description}
            </span>
        </div>
    )
}
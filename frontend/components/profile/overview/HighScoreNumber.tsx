import React from 'react';
import styles from '../../../styles/Profile.module.scss';

export const HighScoreNumber: React.FC<{
    label: string;
    value: string;
}> = ({ label, value }) => {
    return(
        <div className={styles['highscore-number']}>
            <span>
                {label}
            </span>
            <h2>
                {value}
            </h2>
        </div>
    )
}
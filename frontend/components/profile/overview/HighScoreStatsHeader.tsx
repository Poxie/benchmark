import React from 'react';
import styles from '../../../styles/Profile.module.scss';
import { getReadableTime } from '../../../utils/functions';

export const HighScoreStatsHeader: React.FC<{
    lastPlayed: string
}> = ({ lastPlayed }) => {
    return(
        <div className={styles['stats-header']}>
            Last played on {getReadableTime(lastPlayed)}
        </div>
    )
}
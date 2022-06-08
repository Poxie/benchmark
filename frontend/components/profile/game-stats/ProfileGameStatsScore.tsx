import React from 'react';
import styles from '../../../styles/ProfileGameStats.module.scss';
import { getReadableTime } from '../../../utils/functions';
import { Score } from '../../game-components/Leaderboard';

export const ProfileGameStatsScore: React.FC<Score> = ({ score, timestamp }) => {
    return(
        <div className={styles['score']}>
            <span>
                {score} points
            </span>
            <span className={styles['score-timestamp']}>
                at {getReadableTime(timestamp, true)}
            </span>
        </div>
    )
}
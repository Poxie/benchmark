import Link from 'next/link';
import React from 'react';
import styles from '../../styles/GameComponents.module.scss';
import { Score } from './Leaderboard';

export const LeaderboardItem: React.FC<Score> = ({ ranking, score, user }) => {
    return(
        <div className={styles['leaderboard-item']}>
            <div className={styles['leaderboard-item-main']}>
                <div 
                    className={styles['leaderboard-position']}
                    data-position={ranking}
                >
                    {ranking}
                </div>
                <span className={styles['username']}>
                    <Link href={`/profile/${user.username}/overview`}>
                        {user.name || user.username}
                    </Link>
                </span>
            </div>
            <span className={styles['leaderboard-score']}>
                {score} pts
            </span>
        </div>
    )
}
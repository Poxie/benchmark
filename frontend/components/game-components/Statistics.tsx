import React, { useEffect, useState } from 'react';
import styles from '../../styles/GameComponents.module.scss';
import { Leaderboard } from './Leaderboard';
import { StatsGraph } from './StatsGraph';

export const Statistics: React.FC<{
    gameId: string;
}> = ({ gameId }) => {
    return(
        <div className={styles['stats']}>
            <h1>
                Leaderboard
            </h1>
            <div className={styles['stats-content']}>
                <Leaderboard gameId={gameId} />
                <StatsGraph />
            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import styles from '../../styles/GameComponents.module.scss';
import { Leaderboard } from './Leaderboard';

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

                {/* Look figma design for this one */}
                {/* Temporary on ice - needs more data */}
                {/* <StatsGraph /> */}
            </div>
        </div>
    )
}
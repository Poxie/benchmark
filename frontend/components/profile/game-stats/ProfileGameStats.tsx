import React from 'react';
import styles from '../../../styles/ProfileGameStats.module.scss';
import { selectProfileGameStats, selectProfileGameStatsGame } from '../../../redux/profile/selectors';
import { useAppSelector } from '../../../redux/store';
import { ProfileGameStatsCards } from './ProfileGameStatsCards';
import { ProfileGameStatsScores } from './ProfileGameStatsScores';

export const ProfileGameStats: React.FC<{gameId: string}> = ({ gameId }) => {
    const game = useAppSelector(state => selectProfileGameStatsGame(state, gameId));
    if(!game) return null;

    const { title } = game;
    return(
        <div className={styles['container']}>
            <h1>
                {title}
            </h1>
            <ProfileGameStatsCards gameId={gameId} />
            <ProfileGameStatsScores gameId={gameId} />
        </div>
    )
}
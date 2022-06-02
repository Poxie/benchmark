import React from 'react';
import styles from '../../../styles/ProfileGameStats.module.scss';
import { selectProfileGameStatsMain } from '../../../redux/profile/selectors';
import { useAppSelector } from '../../../redux/store';
import { ProfileGameStatsCard } from './ProfileGameStatsCard';

export const ProfileGameStatsCards: React.FC<{
    gameId: string;
}> = ({ gameId }) => {
    const cardInfo = useAppSelector(state => selectProfileGameStatsMain(state, gameId));
    if(!cardInfo) return null;

    const { gamesPlayed, highScore } = cardInfo;
    return(
        <div className={styles['cards']}>
            <ProfileGameStatsCard 
                label={'Highest Score'}
                text={`${highScore.score} points`}
            />
            <ProfileGameStatsCard 
                label={'Games Played'}
                text={`${gamesPlayed} games`}
            />
            <ProfileGameStatsCard 
                label={'Average Ssore'}
                text={'Coming soon'}
            />
        </div>
    )
}
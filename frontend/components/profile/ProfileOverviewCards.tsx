import React from 'react';
import styles from '../../styles/Profile.module.scss';
import { selectProfileStats } from '../../redux/profile/selectors';
import { useAppSelector } from '../../redux/store';
import { ProfileOverviewCard } from './ProfileOverviewCard';

export const ProfileOverviewCards = () => {
    const stats = useAppSelector(selectProfileStats);
    if(!stats) return null;

    const gameFeedback = stats.differentGamesPlayed < 2 ? (
        'You do not have a very varied taste'
    ) : (
        'You have a pretty varied taste.'
    );
    return(
        <div className={styles['overview-cards']}>
            <ProfileOverviewCard 
                title={`${stats.totalScore} score`}
                description={'This score is a combination of the highscores you have received on all games.'}
            />
            <ProfileOverviewCard 
                title={`${stats.differentGamesPlayed} games`}
                description={`You have played ${stats.differentGamesPlayed} different games. ${gameFeedback}`}
            />
            <ProfileOverviewCard 
                title={`${stats.duelWins} wins`}
                description={'This is the amount of times you have won duels with friends.'}
            />
        </div>
    )
}
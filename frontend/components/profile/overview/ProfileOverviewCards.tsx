import React from 'react';
import styles from '../../../styles/Profile.module.scss';
import { selectProfileStats } from '../../../redux/profile/selectors';
import { useAppSelector } from '../../../redux/store';
import { ProfileOverviewCard } from './ProfileOverviewCard';

export const ProfileOverviewCards = () => {
    const stats = useAppSelector(selectProfileStats);
    if(!stats) return null;

    const gameFeedback = stats.differentGamesPlayed < 2 ? (
        'They do not have a very varied taste'
    ) : (
        'They have a pretty varied taste'
    );
    return(
        <div className={styles['overview-cards']}>
            <ProfileOverviewCard 
                title={`${stats.totalScore} score`}
                description={'This is the combined highscores of this user.'}
            />
            <ProfileOverviewCard 
                title={`${stats.differentGamesPlayed} games`}
                description={`This user has played ${stats.differentGamesPlayed} different games. ${gameFeedback}.`}
            />
            <ProfileOverviewCard 
                title={`${stats.duelWins} wins`}
                description={'This is the amount of times this user has won duels.'}
            />
        </div>
    )
}
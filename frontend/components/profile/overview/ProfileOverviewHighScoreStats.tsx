import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_PROFILE_GAME_STATS } from '../../../graphql/queries';
import { selectProfileIdentity } from '../../../redux/profile/selectors';
import { GameStats } from '../../../redux/profile/types';
import { useAppSelector } from '../../../redux/store';
import styles from '../../../styles/Profile.module.scss';
import { HighScoreStatsHeader } from './HighScoreStatsHeader';

export const ProfileOverviewHighScoreStats: React.FC<{
    gameId: string;
}> = ({ gameId }) => {
    const profileIdentity = useAppSelector(selectProfileIdentity);
    const userId = profileIdentity?.id;
    const { data, loading } = useQuery(GET_PROFILE_GAME_STATS, {
        variables: {
            gameId,
            userId
        }
    });
    
    if(loading || !data) return null;
    
    const stats: GameStats = data.getProfileGameStats;
    return(
        <div className={styles['high-score-stats']}>
            <HighScoreStatsHeader 
                lastPlayed={stats.lastPlayed}
            />
        </div>
    )
}
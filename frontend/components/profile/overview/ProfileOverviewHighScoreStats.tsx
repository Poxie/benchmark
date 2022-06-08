import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_PROFILE_GAME_STATS } from '../../../graphql/queries';
import { selectProfileIdentity } from '../../../redux/profile/selectors';
import { GameStats } from '../../../redux/profile/types';
import { useAppSelector } from '../../../redux/store';
import styles from '../../../styles/Profile.module.scss';
import { HighScoreStatsFooter } from './HighScoreStatsFooter';
import { HighScoreStatsHeader } from './HighScoreStatsHeader';
import { HighScoreStatsNumbers } from './HighScoreStatsNumbers';

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
    
    // Deciphering fetched data
    const stats: GameStats = data.getProfileGameStats;
    const { highScore, averageScore, latestScore, lastPlayed, game } = stats;

    // If user has played game, these will not be null
    if(!highScore || !averageScore || !latestScore || !lastPlayed) return null;
    
    return(
        <div className={styles['high-score-stats']}>
            <HighScoreStatsHeader 
                lastPlayed={lastPlayed}
            />
            <HighScoreStatsNumbers 
                highScore={highScore.score}
                ranking={highScore.ranking}
                averageScore={averageScore}
                latestScore={latestScore}
            />
            <HighScoreStatsFooter 
                gameId={game.id}
            />
        </div>
    )
}
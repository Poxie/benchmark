import React from 'react';
import styles from '../../styles/GameComponents.module.scss';
import { useQuery } from '@apollo/client';
import { GET_GAME_LEADERBOARD } from '../../graphql/queries';
import { User } from '../../redux/user/types';
import { LeaderboardItem } from './LeaderboardItem';

export type Score = {
    user: User;
    score: number;
    position: number;
}
export const Leaderboard: React.FC<{
    gameId: string;
}> = ({ gameId }) => {
    const { data, loading, error } = useQuery<{
        getGameLeaderboard: Score[]
    }>(GET_GAME_LEADERBOARD, {
        variables: { gameId }
    })

    // Insert loading skeleton later
    if(loading || !data) return null;

    const scores = data.getGameLeaderboard;
    return(
        <div className={styles['leaderboard']}>
            {scores.map(score => {
                return <LeaderboardItem {...score} key={score.position} />
            })}
            
            {!scores.length && (
                <span>
                    There are no scores to show.
                </span>
            )}
        </div>
    )
}
import React from 'react';
import styles from '../../../styles/ProfileGameStats.module.scss';
import { selectProfileGameStatsScores } from '../../../redux/profile/selectors';
import { useAppSelector } from '../../../redux/store';

export const ProfileGameStatsScores: React.FC<{
    gameId: string;
}> = ({ gameId }) => {
    const scores = useAppSelector(state => selectProfileGameStatsScores(state, gameId));
    if(!scores) return null;

    return(
        <div className={styles['scores']}>
            <h2>
                All Scores
            </h2>
            {scores.map((score, key) => {
                return(
                    <div className={styles['score']} key={key}>
                        {score.score} points
                    </div>
                )
            })}

            {!scores.length && (
                <span className={styles['empty']}>
                    All your scores will be shown here.
                </span>
            )}
        </div>
    )
}
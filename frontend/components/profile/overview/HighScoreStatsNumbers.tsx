import React from 'react';
import styles from '../../../styles/Profile.module.scss';
import { getNumberSuffix } from '../../../utils/functions';
import { HighScoreNumber } from './HighScoreNumber';

export const HighScoreStatsNumbers: React.FC<{
    highScore: string;
    averageScore: string;
    ranking: number;
    latestScore: string;
}> = ({ highScore, averageScore, ranking, latestScore }) => {
    return(
        <div className={styles['stats-numbers']}>
            <HighScoreNumber 
                label={'Ranking'}
                value={`${ranking}${getNumberSuffix(ranking)}`}
            />
            <HighScoreNumber 
                label={'Personal Best'}
                value={`${highScore} points`}
            />
            <HighScoreNumber 
                label={'Average Score'}
                value={`${averageScore} points`}
            />
            <HighScoreNumber 
                label={'Latest Score'}
                value={`${latestScore} points`}
            />
        </div>
    )
}
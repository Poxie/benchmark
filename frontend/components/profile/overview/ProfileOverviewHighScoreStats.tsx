import React from 'react';
import styles from '../../../styles/Profile.module.scss';

export const ProfileOverviewHighScoreStats: React.FC<{
    gameId: string;
}> = ({ gameId }) => {
    return(
        <div className={styles['high-score-stats']}>
            {/* {gameId} */}
        </div>
    )
}
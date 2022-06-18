import React from 'react';
import styles from '../../styles/AllGames.module.scss';

export const AllGamesHeader = () => {
    return(
        <div className={styles['header']}>
            <h1>
                Gathered in one place...
            </h1>
            <span>
            ...is all of our tests. Test yourself at different games, at different levels, with different mindsets. Challenge your friends, go for a leaderboard spanosition, or just spanlay for fun.
            </span>
        </div>
    )
}
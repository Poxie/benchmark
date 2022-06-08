import React from 'react';
import styles from '../../../styles/Profile.module.scss';
import Link from 'next/link';
import { FilledArrowIcon } from '../../../icons/FilledArrowIcon';
import { Game } from '../../../redux/profile/types';

export const ProfileOverviewHighScoreHeader: React.FC<{
    game: Game;
    score: number;
    onClick: () => void;
}> = ({ game, score, onClick }) => {
    return(
        <div className={styles['high-score-header']} onClick={onClick}>
            <div className={styles['left']}>
                <Link href={`/${game.id}`}>
                    <div>
                        <FilledArrowIcon />
                    </div>
                </Link>
                <span>
                    {game.title}
                </span>
            </div>
            <div className={styles['right']}>
                <span className={styles['high-score-points']}>
                    {score} points
                </span>

                <FilledArrowIcon />
            </div>
        </div>
    )
}
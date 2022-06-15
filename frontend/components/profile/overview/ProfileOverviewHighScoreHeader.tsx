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
        <a 
            className={styles['high-score-header']} 
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
            href={'#'}
        >
            <div className={styles['left']}>
                <Link href={`/${game.id}`}>
                    <button className={styles['play-button']}>
                        <FilledArrowIcon />
                    </button>
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
        </a>
    )
}
import React from 'react';
import styles from '../../styles/Profile.module.scss'
import { selectProfileHighScores } from '../../redux/profile/selectors';
import { useAppSelector } from '../../redux/store';
import Link from 'next/link';
import { FilledArrowIcon } from '../../icons/FilledArrowIcon';

export const ProfileOverviewHighScores = () => {
    const highScores = useAppSelector(selectProfileHighScores);
    if(!highScores) return null;

    return(
        <div className={styles['overview-high-scores']}>
            <p>
                My Highscores
            </p>

            {highScores.map(highScore => {
                const { score, game } = highScore;

                return(
                    <div className={styles['high-score']}>
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
                        <span className={styles['high-score-points']}>
                            {score} points
                        </span>
                    </div>
                )
            })}
        </div>
    )
}
import React from 'react';
import styles from '../../../styles/Profile.module.scss'
import { selectProfileHighScores } from '../../../redux/profile/selectors';
import { useAppSelector } from '../../../redux/store';
import Link from 'next/link';
import { FilledArrowIcon } from '../../../icons/FilledArrowIcon';
import { ProfileOverviewHighScore } from './ProfileOverviewHighScore';

export const ProfileOverviewHighScores = () => {
    const highScores = useAppSelector(selectProfileHighScores);
    if(!highScores) return null;

    return(
        <div className={styles['overview-high-scores']}>
            <p>
                My Highscores
            </p>

            {highScores.map((highScore, key) => <ProfileOverviewHighScore {...highScore} key={key} />)}

            {!highScores.length && (
                <span className={styles['empty']}>
                    You haven&#39;t played any games yet.
                </span>
            )}
        </div>
    )
}
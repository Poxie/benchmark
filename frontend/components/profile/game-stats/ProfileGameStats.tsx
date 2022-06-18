import React from 'react';
import styles from '../../../styles/ProfileGameStats.module.scss';
import { selectProfileGameStats, selectProfileGameStatsGame, selectProfileIdentity } from '../../../redux/profile/selectors';
import { useAppSelector } from '../../../redux/store';
import { ProfileGameStatsCards } from './ProfileGameStatsCards';
import { ProfileGameStatsScores } from './ProfileGameStatsScores';
import Head from 'next/head';

export const ProfileGameStats: React.FC<{gameId: string}> = ({ gameId }) => {
    const info = useAppSelector(selectProfileIdentity);
    const game = useAppSelector(state => selectProfileGameStatsGame(state, gameId));
    if(!game) return null;

    const { title } = game;
    return(
        <>
        <Head>
            <title>
                {info?.username} - {process.env.NEXT_PUBLIC_WEBSITE_NAME}
            </title>
            <meta name="og:title" content={`${info?.username} - ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`} />
            <meta name="description" content={`${info?.username}'s stats for ${game.title}.`} />
            <meta name="og:description" content={`${info?.username}'s stats for ${game.title}.`} />
        </Head>

        <div className={styles['container']}>
            <h1>
                {title}
            </h1>
            <ProfileGameStatsCards gameId={gameId} />
            <ProfileGameStatsScores gameId={gameId} />
        </div>
        </>
    )
}
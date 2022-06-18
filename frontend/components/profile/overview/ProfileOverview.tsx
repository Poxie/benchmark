import Head from 'next/head';
import React from 'react';
import { selectProfileIdentity } from '../../../redux/profile/selectors';
import { useAppSelector } from '../../../redux/store';
import styles from '../../../styles/Profile.module.scss';
import { ProfileOverviewCard } from './ProfileOverviewCard';
import { ProfileOverviewCards } from './ProfileOverviewCards';
import { ProfileOverviewHighScores } from './ProfileOverviewHighScores';

export const ProfileOverview = () => {
    const identity = useAppSelector(selectProfileIdentity);

    return(
        <>
        <Head>
            <title>
                {identity?.username} - {process.env.NEXT_PUBLIC_WEBSITE_NAME}
            </title>
            <meta name="og:title" content={`${identity?.username} - ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`} />
            <meta name="description" content={`All of ${identity?.username}'s stats.`} />
            <meta name="og:description" content={`All of ${identity?.username}'s stats.`} />
        </Head>

        <div className={styles['overview-container']}>
            <ProfileOverviewCards />
            <ProfileOverviewHighScores />
        </div>
        </>
    )
}
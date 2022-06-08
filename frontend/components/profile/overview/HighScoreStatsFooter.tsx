import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../../../styles/Profile.module.scss';

export const HighScoreStatsFooter: React.FC<{
    gameId: string;
}> = ({ gameId }) => {
    const { username } = useRouter().query;

    return(
        <div className={styles['stats-footer']}>
            <Link href={`/profile/${username}/${gameId}`}>
                <div className={styles['stats-footer-button']}>
                    View more
                </div>
            </Link>
        </div>
    )
}
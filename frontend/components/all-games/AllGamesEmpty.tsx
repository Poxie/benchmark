import { useRouter } from 'next/router';
import React from 'react';
import styles from '../../styles/AllGames.module.scss';
import { Button } from '../button';

export const AllGamesEmpty = () => {
    const router = useRouter();
    return(
        <div className={styles['empty']}>
            <h4>
                404: That&apos;s a broken filter.
            </h4>
            <span>
                As of now, this filter does not exist. However, who knows, it may be a thing in the future.
            </span>
            <Button onClick={() => router.replace('/all-games')}>
                Go to a working filter
            </Button>
        </div>
    )
}
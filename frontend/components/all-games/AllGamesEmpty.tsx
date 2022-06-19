import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/AllGames.module.scss';
import { Button } from '../button';

export const AllGamesEmpty = () => {
    const router = useRouter();
    return(
        <div className={styles['empty']}>
            <h3>
                404: That&apos;s a broken filter.
            </h3>
            <span>
                As of now, this filter does not exist. However, who knows, it may be a thing in the future.
            </span>
            <Button onClick={() => router.replace({pathname: '/all-games'}, undefined, { scroll: false })}>
                Go to a working filter
            </Button>
        </div>
    )
}
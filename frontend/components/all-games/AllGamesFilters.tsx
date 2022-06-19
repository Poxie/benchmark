import React from 'react';
import styles from '../../styles/AllGames.module.scss';
import { useRouter } from 'next/router';
import { gameKeys, GameKeyType } from './AllGames';
import { firstLetterUppercase } from '../../utils/functions';

export const AllGamesFilters = () => {
    const router = useRouter();
    const { type: param='featured' } = router.query as { type: GameKeyType | 'featured' };

    const changeType = (type: GameKeyType | 'featured') => {
        let query = {};
        if(type !== 'featured') query = { type }; 
        router.replace({
            pathname: `/all-games`,
            query,
        }, undefined, { scroll: false });
    }

    return(
        <div className={styles['filter-container']}>
            <h2>
                Filters
            </h2>
            <div className={styles['filters']}>
                {gameKeys.map(type => {
                    const active = type === param;
                    
                    const className = [
                        styles['filter'],
                        active ? styles['active'] : ''
                    ].join(' ');
                    return(
                        <button 
                            className={className} 
                            onClick={() => changeType(type)}
                            key={type}
                        >
                            {firstLetterUppercase(type)}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
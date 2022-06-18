import React from 'react';
import styles from '../../styles/AllGames.module.scss';
import { firstLetterUppercase } from '../../utils/functions';
import { CategoryType } from './AllGames';
import { AllGamesCard } from './AllGamesCard';

export const AllGamesRow: React.FC<CategoryType> = ({ title, items }) => {
    return(
        <div className={styles['row']}>
            <h2>
                {firstLetterUppercase(title)}
            </h2>
            
            <div className={styles['row-items']}>
                {items.map(item => <AllGamesCard {...item} key={item.title} />)}
            </div>
        </div>
    )
}
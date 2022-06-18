import React from 'react';
import styles from '../../styles/AllGames.module.scss';
import Link from 'next/link';
import { GameType } from './AllGames';
import { firstLetterUppercase } from '../../utils/functions';

export const AllGamesCard: React.FC<GameType> = ({ title, category, path, icon }) => {
    return(
        <Link href={path}>
            <a>
                <div className={styles['row-item']}>
                    <div className={styles['row-text']}>
                        <h3>
                            {title}
                        </h3>
                        <span>
                            {firstLetterUppercase(category)}
                        </span>
                    </div>

                    {icon}
                </div>
            </a>
        </Link>
    )
}
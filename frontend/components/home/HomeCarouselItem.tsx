import Link from 'next/link';
import React from 'react';
import { FunctionComponent } from 'react';
import styles from '../../styles/Home.module.scss';

export const HomeCarouselItem: React.FC<{
    text: string;
    category: string;
    icon: FunctionComponent;
    path: string;
    comingSoon: boolean;
    isBeta: boolean;
}> = ({ text, category, path, icon: Icon, comingSoon, isBeta }) => {
    return(
        <div className={styles['carousel-item']}>
            <Link href={comingSoon ? '' : path}>
                <a className={styles['carousel-item-content']}>
                    {(comingSoon || isBeta) && (
                        <span className={styles['item-state'] + (isBeta ? ` ${styles['beta']}` : '')}>
                            {comingSoon ? 'Coming Soon' : 'BETA'}
                        </span>
                    )}
                    
                    <div className={styles['carousel-item-icon']}>
                        <Icon />
                    </div>

                    <div className={styles['carousel-item-text']}>
                        <span className={styles['carousel-item-title']}>
                            {text}
                        </span>
                        <span className={styles['carousel-item-category']}>
                            {category}
                        </span>
                    </div>
                </a>
            </Link>
        </div>
    )
}
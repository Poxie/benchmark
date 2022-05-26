import Link from 'next/link';
import React from 'react';
import { FunctionComponent } from 'react';
import styles from '../../styles/Home.module.scss';

export const HomeCarouselItem: React.FC<{
    text: string;
    category: string;
    icon: FunctionComponent;
    path: string;
}> = ({ text, category, path, icon: Icon }) => {
    return(
        <div className={styles['carousel-item']}>
            <Link href={path}>
                <div className={styles['carousel-item-content']}>
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
                </div>
            </Link>
        </div>
    )
}
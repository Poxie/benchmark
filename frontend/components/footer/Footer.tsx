import React from 'react';
import styles from '../../styles/Footer.module.scss';
import { FooterSections } from './FooterSections';

export const Footer = () => {
    return(
        <div className={styles['container']}>
            <div className={styles['content']}>
                <div className={styles['left']}>
                    <h1>
                        {process.env.NEXT_PUBLIC_WEBSITE_NAME}
                    </h1>
                    <span>
                        {process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION}
                    </span>
                </div>
                <FooterSections />
            </div>
        </div>
    )
}
import React from 'react';
import styles from '../../styles/Footer.module.scss';
import { FooterSections } from './FooterSections';

export const Footer = () => {
    return(
        <footer className={styles['container']}>
            <div className={styles['content']}>
                <div className={styles['left']}>
                    <h3>
                        {process.env.NEXT_PUBLIC_WEBSITE_NAME}
                    </h3>
                    <span>
                        {process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION}
                    </span>
                </div>
                <FooterSections />
            </div>
        </footer>
    )
}
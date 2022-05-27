import React from 'react';
import styles from '../../styles/Footer.module.scss';
import { FooterTab } from './FooterTab';

export type FooterAboutSection = {
    title: string;
    items: FooterAboutItem[];
}
export type FooterAboutItem = {
    text: string;
    path: string;
    external: boolean;
}
const sections = [
    { title: `About us`, items: [
        { text: 'Contact', path: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`, external: true },
        { text: 'Creator', path: 'https://poxen.dev', external: true }
    ] },
]
export const FooterSections = () => {
    return(
        <div className={styles['sections']}>
            {sections.map(section => {
                const { title, items } = section;
                return(
                    <div className={styles['section']} key={title}>
                        <p>
                            {title}
                        </p>
                        {items.map(item => <FooterTab {...item} key={item.text} />)}
                    </div>
                )
            })}
        </div>
    )
}
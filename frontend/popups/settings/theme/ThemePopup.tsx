import React, { useState } from 'react';
import { ItemType, PopupItem } from '../../PopupItem';
import styles from '../SettingsPopup.module.scss';

export const ThemePopup = () => {
    const [active, setActive] = useState(localStorage.getItem('theme') || 'light');

    // Setting theme
    const setTheme = (theme: 'dark' | 'light') => {
        setActive(theme);
        localStorage.setItem('theme', theme);
        document.body.classList.add(theme);
        document.body.classList.remove(theme === 'dark' ? 'light' : 'dark');
    }

    const items: ItemType[] = [
        { text: 'Light Theme', onClick: () => setTheme('light'), closeOnClick: false },
        { text: 'Dark Theme', onClick: () => setTheme('dark'), closeOnClick: false }
    ]
    return(
        <div className={styles['theme']}>
            {items.map(item => <PopupItem {...item} key={item.text} />)}
        </div>
    )
}
import React from 'react';
import styles from '../../styles/Navbar.module.scss';
import { NavbarTab } from './NavbarTab';

export const NavbarTabs = () => {
    const tabs = [
        { title: 'Memory', path: '/memory' },
        { title: 'Algorithms', path: '/algorithms' },
        { title: 'Aiming', path: '/aiming' },
        { title: 'Typing', path: '/typing' }
    ];
    return(
        <div className={styles['tabs']}>
            {tabs.map(tab => <NavbarTab {...tab} key={tab.path} />)}
        </div>
    )
}
import React from 'react';
import { useDeviceType } from '../../hooks/useDeviceType';
import styles from '../../styles/Navbar.module.scss';
import { NavbarOptions } from './NavbarOptions';
import { NavbarTab } from './NavbarTab';

export const NavbarTabs = () => {
    const device = useDeviceType();

    const tabs = [
        { title: 'Memory', path: '/memory' },
        { title: 'Algorithms', path: '/algorithms' },
        { title: 'Aiming', path: '/aiming' },
        { title: 'Typing', path: '/typing' }
    ];
    return(
        <div className={styles['tabs']}>
            {tabs.map(tab => <NavbarTab {...tab} key={tab.path} />)}
            {device === 'mobile' && (
                <NavbarOptions />
            )}
        </div>
    )
}
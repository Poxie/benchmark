import React from 'react';
import { useDeviceType } from '../../hooks/useDeviceType';
import styles from '../../styles/Navbar.module.scss';
import { NavbarOptions } from './NavbarOptions';
import { NavbarTab } from './NavbarTab';

export const NavbarTabs = () => {
    const device = useDeviceType();

    const tabs = [
        { title: 'Memory', type: 'memory' },
        { title: 'Algorithms', type: 'algorithms' },
        { title: 'Aiming', type: 'aiming' },
        { title: 'Typing', type: 'typing' }
    ];
    return(
        <div className={styles['tabs']}>
            {tabs.map(tab => <NavbarTab {...tab} key={tab.type} />)}
            {device === 'mobile' && (
                <NavbarOptions />
            )}
        </div>
    )
}
import React from 'react';
import styles from '../../styles/Navbar.module.scss';
import { NavbarOptions } from './NavbarOptions';
import { NavbarTabs } from './NavbarTabs';
import { NavbarTitle } from './NavbarTitle';

export const Navbar = () => {
    return(
        <div className={styles['container']}> 
            <div className={styles['left']}>
                <NavbarTitle />
                <NavbarTabs />
            </div>
            <NavbarOptions />
        </div>
    )
}
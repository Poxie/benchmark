import React, { useEffect, useState } from 'react';
import { useDeviceType } from '../../hooks/useDeviceType';
import { HamIcon } from '../../icons/HamIcon';
import styles from '../../styles/Navbar.module.scss';
import { NavbarOptions } from './NavbarOptions';
import { NavbarTabs } from './NavbarTabs';
import { NavbarTitle } from './NavbarTitle';

export const Navbar = () => {
    const device = useDeviceType();
    const [show, setShow] = useState(false);

    // Methods for updating show state
    const toggle = () => setShow(!show);
    const close = () => setShow(false);

    // Updating state if width of screen change
    useEffect(() => {
        if(device !== 'mobile') close();
    }, [device]);

    const containerStyles = [
        styles['container'],
        show ? styles['show-mobile'] : ''
    ].join(' ');
    return(
        <div className={containerStyles}> 
            <div className={styles['left']}>
                <HamIcon onClick={toggle} className={styles['ham']} />
                <NavbarTitle />
                <NavbarTabs />
            </div>
            <NavbarOptions />
        </div>
    )
}
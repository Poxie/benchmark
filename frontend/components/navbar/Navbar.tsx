import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useDeviceType } from '../../hooks/useDeviceType';
import { HamIcon } from '../../icons/HamIcon';
import styles from '../../styles/Navbar.module.scss';
import { NavbarOptions } from './NavbarOptions';
import { NavbarTabs } from './NavbarTabs';
import { NavbarTitle } from './NavbarTitle';

export const Navbar = () => {
    const { asPath } = useRouter();
    const device = useDeviceType();
    const [show, setShow] = useState(false);

    // Methods for updating show state
    const toggle = () => setShow(!show);
    const close = () => setShow(false);

    // Updating state if width of screen change
    useEffect(() => {
        if(device !== 'mobile') close();
    }, [device]);
    // Closing on path change
    useEffect(close, [asPath]);

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
            {device !== 'mobile' && (
                <NavbarOptions />
            )}
            {device !== 'computer' && (
                <motion.div
                    animate={{ opacity: show ? 1 : 0, pointerEvents: show ? 'unset' : 'none' }}
                    initial={{ opacity: 0, pointerEvents: 'none' }}
                    className={styles['backdrop']}
                    onClick={close}
                />
            )}
        </div>
    )
}
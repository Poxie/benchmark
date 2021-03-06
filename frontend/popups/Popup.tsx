import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Options, usePopup } from '../contexts/PopupProvider';
import styles from '../styles/Popup.module.scss';
import { ArrowIcon } from '../icons/ArrowIcon';
import { useDeviceType } from '../hooks/useDeviceType';

export const Popup: React.FC<{
    left: number;
    top: number;
    canGoBack: boolean;
    goBackTitle: string;
    options: Options | undefined;
    children: any;
}> = ({ children, left: _left, top, canGoBack, goBackTitle, options }) => {
    const device = useDeviceType();
    const ref = useRef<HTMLDivElement>(null);
    const { closePopups, goBack } = usePopup();
    const [left, setLeft] = useState(_left);

    useEffect(() => {
        // Position correction with popup width
        const elementWidth = (ref.current?.getBoundingClientRect().width || 0);
        let toSubstract = options?.centered ? elementWidth / 2 : elementWidth;
        let newLeft = _left - toSubstract;
        
        // Checking if popup exceeds screen
        if(newLeft + elementWidth > window.innerWidth) {
            newLeft = window.innerWidth - elementWidth
        }
        if(newLeft < 0) {
            newLeft = 0;
        }
        
        setLeft(newLeft);
    }, [_left])

    useEffect(() => {
        // Detecting click outside of popup
        const handleClickOutside = (e: MouseEvent) => {
            if(ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
                closePopups();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return(
        <motion.div 
            className={styles.container}
            style={{ left, top }}
            initial={{ opacity: 0, translateY: 20 }}
            exit={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: .200 }}
            ref={ref}
        >   
            {canGoBack && (
                <a 
                    className={styles['go-back-btn']} 
                    onClick={e => {
                        e.preventDefault();
                        goBack();
                    }}
                    href={'#'}
                >
                    <ArrowIcon />
                    {goBackTitle}
                </a>
            )}
            {children}
            {device === 'mobile' && (
                <span 
                    className={styles['close']} 
                    onClick={closePopups}
                >
                    Close
                </span>
            )}
        </motion.div>
    )
}
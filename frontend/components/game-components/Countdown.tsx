import React, { useEffect, useRef } from 'react';
import styles from '../../styles/GameComponents.module.scss';

export const Countdown: React.FC<{
    duration: number;
    onEnd: () => void;
}> = ({ duration, onEnd }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            if(!ref.current) return;
            ref.current.style.width = '100%';
        }, 0);

        setTimeout(onEnd, duration);
    }, []);

    return(
        <div className={styles['countdown']} style={{ transition: `width ${duration}ms linear` }} ref={ref} />
    )
}
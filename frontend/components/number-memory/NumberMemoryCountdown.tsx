import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from '../../styles/NumberMemory.module.scss';

export const NumberMemoryCountdown: React.FC<{
    duration: number;
    onEnd: () => void;
}> = ({ duration, onEnd }) => {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
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
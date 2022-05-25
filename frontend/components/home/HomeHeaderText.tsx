import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Home.module.scss';

const texts = [
    { text: 'Cognitive Abilities', color: '#D93025' },
    { text: 'Problem Solving', color: '#f9ab00' },
    { text: 'Reaction Time', color: '#1a73e8' }
]
export const HomeHeaderText = () => {
    const [index, setIndex] = useState(0);
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let timeout: NodeJS.Timer;
        const interval = setInterval(() => {
            setIndex(prev => {
                if(!container.current) return prev;

                // If index is at placeholder's index, reset position
                let newIndex = prev + 1;
                if(newIndex > texts.length) {
                    newIndex = 1;
                    container.current.style.transition = 'none';
                    container.current.style.transform = `translate3d(0,0,0)`;
                };
                
                // Making sure it updates transition properties after reset of position
                timeout = setTimeout(() => {
                    if(!container.current) return;
                    container.current.style.transition = 'transform .5s';
                    container.current.style.transform = `translate3d(0, -${100 * newIndex}%, 0)`;
                }, 50);
                return newIndex;
            })
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        }
    }, []);
    
    return(
        <div className={styles['header-text']}>
            <h1>
                Challenge Your
            </h1>
            <div className={styles['addon-text']}>
                <div className={styles['addon-text-container']} ref={container}>
                    {[...texts, ...[texts[0]]].map(({ text, color }, key) => {
                        return(
                            <h1 style={{ color }} key={key}>
                                {text}
                            </h1>
                        )
                    })}
                </div>
            </div>
            <span>
                A place to challenge each other with mind-boggling challenges! Prove yourself by receiving high scores and get displayed on the leaderboard!
            </span>
        </div>
    )
}
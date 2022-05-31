import React, { useEffect } from 'react';
import styles from '../../styles/GameComponents.module.scss';
import { Button } from '../button';

export const StartScreen: React.FC<{
    onStart: () => void;
    gameName: string;
    gameDescription: string;
}> = ({ onStart, gameName, gameDescription }) => {
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if(e.key === 'Enter') {
                onStart();
            }
        }

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    return(
        <div className={styles['start-screen']}>
            <h1>
                Welcome to {gameName}!
            </h1>
            <span>
                {gameDescription}
            </span>
            <Button 
                type={'light'} 
                className={styles['button']}
                onClick={onStart}
            >
                Let&apos;s Start!
            </Button>
        </div>
    )
}
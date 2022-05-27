import React from 'react';
import styles from '../../styles/NumberMemory.module.scss';
import { Button } from '../button';

export const NumberMemoryStartScreen: React.FC<{
    onStart: () => void;
}> = ({ onStart }) => {
    return(
        <div className={styles['start-screen']}>
            <h1>
                Welcome to Number Memory!
            </h1>
            <span>
                Remember the previous number while new digits get added.
            </span>
            <Button 
                type={'light'} 
                className={styles['button']}
                onClick={onStart}
            >
                Let's Start!
            </Button>
        </div>
    )
}
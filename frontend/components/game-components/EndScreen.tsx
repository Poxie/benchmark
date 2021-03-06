import React from 'react';
import styles from '../../styles/GameComponents.module.scss';
import { Button } from '../button';

export const EndScreen: React.FC<{
    score: number;
    onRestart: () => void;
}> = ({ score, onRestart }) => {
    return(
        <div className={styles['end-screen']}>
            <h1>
                You scored {score} point{score !== 1 ? 's' : ''}.
            </h1>
            <span>
                Compare your score with others&apos; below, or try again to get a higher score!
            </span>
            <Button 
                type={'light'}
                className={styles['button']}
                onClick={onRestart}
            >
                Play Again
            </Button>
        </div>
    )
}
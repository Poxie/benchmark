import React, { useState } from 'react';
import styles from '../../styles/NumberMemory.module.scss';
import { Button } from '../button';
import { NumberMemoryEndScreen } from './NumberMemoryEndScreen';
import { NumberMemoryGame } from './NumberMemoryGame';
import { NumberMemoryStartScreen } from './NumberMemoryStartScreen';

export const NumberMemoryMainScreen = () => {
    const [score, setScore] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const [hasFailed, setHasFailed] = useState(false);

    const onStart = () => setHasStarted(true);
    const onEnd = (score: number) => {
        setScore(score);
        setHasFailed(true);
        setHasStarted(false);
    }

    return(
        <div className={styles['game']}>
            <div className={styles['game-container']}>
                {!hasStarted && !hasFailed && (
                    <NumberMemoryStartScreen onStart={onStart} />
                )}
                {!hasStarted && hasFailed && (
                    <NumberMemoryEndScreen score={score} onRestart={onStart} />
                )}

                {hasStarted && (
                    <NumberMemoryGame onEnd={onEnd} />
                )}
            </div>
        </div>
    )
}
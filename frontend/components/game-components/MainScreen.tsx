import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import styles from '../../styles/GameComponents.module.scss';
import { EndScreen } from './EndScreen';
import { StartScreen } from './StartScreen';

export const MainScreen: React.FC<{
    gameComponent: FunctionComponent<{onEnd: (score: number) => void}>;
    gameName: string;
    gameDescription: string;
}> = ({ gameComponent: GameComponent, gameName, gameDescription }) => {
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
                    <StartScreen onStart={onStart} gameName={gameName} gameDescription={gameDescription} />
                )}
                {!hasStarted && hasFailed && (
                    <EndScreen score={score} onRestart={onStart} />
                )}

                {hasStarted && (
                    <GameComponent onEnd={onEnd} />
                )}
            </div>
        </div>
    )
}
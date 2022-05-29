import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { CREATE_SCORE } from '../../graphql/mutations';
import { useAppSelector } from '../../redux/store';
import { selectUserInfo } from '../../redux/user/selectors';
import styles from '../../styles/GameComponents.module.scss';
import { EndScreen } from './EndScreen';
import { StartScreen } from './StartScreen';

export const MainScreen: React.FC<{
    gameComponent: FunctionComponent<{onEnd: (score: number) => void}>;
    gameName: string;
    gameId: string;
    gameDescription: string;
}> = ({ gameComponent: GameComponent, gameName, gameId, gameDescription }) => {
    const [score, setScore] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const [hasFailed, setHasFailed] = useState(false);
    const userInfo = useAppSelector(selectUserInfo);
    const [updateScore] = useMutation(CREATE_SCORE);

    const onStart = () => setHasStarted(true);
    const onEnd = (score: number) => {
        setScore(score);
        setHasFailed(true);
        setHasStarted(false);

        // If user not logged in, return
        if(!userInfo) return;

        // Updating user score
        updateScore({
            variables: {
                gameId,
                score,
                userId: userInfo.id
            }
        })
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
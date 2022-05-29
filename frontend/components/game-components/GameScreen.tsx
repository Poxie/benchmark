import React from 'react';
import { FunctionComponent } from 'react';
import { MainScreen } from './MainScreen';
import { Statistics } from './Statistics';

export const GameScreen: React.FC<{
    gameComponent: FunctionComponent<{onEnd: (score: number) => void}>;
    gameId: string;
    gameName: string;
    gameDescription: string;
}> = ({ gameComponent: GameComponent, gameName, gameId, gameDescription }) => {
    return(
        <>
            <MainScreen 
                gameComponent={GameComponent}
                gameName={gameName}
                gameDescription={gameDescription}
            />
            <Statistics 
                gameId={gameId}
            />
        </>
    )
}
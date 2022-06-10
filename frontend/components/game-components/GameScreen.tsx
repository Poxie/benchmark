import Head from 'next/head';
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
            <Head>
                <title>
                    {gameName} - {process.env.NEXT_PUBLIC_WEBSITE_NAME}
                </title>
                <meta name="description" content={gameDescription} />
            </Head>

            <MainScreen 
                gameComponent={GameComponent}
                gameName={gameName}
                gameId={gameId}
                gameDescription={gameDescription}
            />
            <Statistics 
                gameId={gameId}
            />
        </>
    )
}
import React from 'react';
import { GameScreen } from '../game-components/GameScreen';
import { NumberMemoryGame } from './NumberMemoryGame';

export const NumberMemory = () => {
    return(
        <GameScreen 
            gameComponent={NumberMemoryGame}
            gameName={'Number Memory'}
            gameId={'number-memory'}
            gameDescription={'Remember the number shown with increasing difficulty.'}
        />
    )
}
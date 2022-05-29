import React from 'react';
import { GameScreen } from '../game-components/GameScreen';
import { WordMemoryGame } from './WordMemoryGame';

export const WordMemory = () => {
    return(
        <GameScreen 
            gameComponent={WordMemoryGame}
            gameName={'Word Memory'}
            gameId={'word-memory'}
            gameDescription={'Differentiate between previously shown words and new words.'}
        />
    )
}
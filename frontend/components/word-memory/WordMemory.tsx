import React from 'react';
import { MainScreen } from '../game-components/MainScreen';
import { WordMemoryGame } from './WordMemoryGame';

export const WordMemory = () => {
    return(
        <div>
            <MainScreen 
                gameComponent={WordMemoryGame}
                gameName={'Word Memory'}
                gameDescription={'Differentiate between previously shown words and new words.'}
            />
        </div>
    )
}
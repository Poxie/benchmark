import React from 'react';
import { MemorySequenceGame } from './MemorySequenceGame';
import { MainScreen } from '../game-components/MainScreen';

export const MemorySequence = () => {
    return(
        <MainScreen 
            gameComponent={MemorySequenceGame}
            gameName={'Memory Sequence'}
            gameId={'memory-sequence'}
            gameDescription={'Remember the previous sequence while new tiles are added.'}
        />
    )
}
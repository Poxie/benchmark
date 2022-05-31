import React from 'react';
import { MemorySequenceGame } from './MemorySequenceGame';
import { GameScreen } from '../game-components/GameScreen';

export const MemorySequence = () => {
    return(
        <GameScreen 
            gameComponent={MemorySequenceGame}
            gameName={'Memory Sequence'}
            gameId={'memory-sequence'}
            gameDescription={'Remember the previous sequence while new tiles are added.'}
        />
    )
}
import React from 'react';
import { GameScreen } from '../game-components/GameScreen';
import { ChimpTestGame } from './ChimpTestGame';

export const ChimpTest = () => {
    return(
        <GameScreen 
            gameComponent={ChimpTestGame}
            gameId={'chimp-test'}
            gameName={'Chimp Test'}
            gameDescription={'Are you smarter than a chimpanzee? Press the tiles in order.'}
        />
    )
}
import React from 'react';
import styles from '../../styles/NumberMemory.module.scss';
import { MainScreen } from '../game-components/MainScreen';
import { NumberMemoryGame } from './NumberMemoryGame';

export const NumberMemory = () => {
    return(
        <div className={styles['container']}>
            <MainScreen 
                gameComponent={NumberMemoryGame}
                gameName={'Number Memory'}
                gameDescription={'Remember the previous number while new digits get added.'}
            />
        </div>
    )
}
import React from 'react';
import styles from '../../styles/NumberMemory.module.scss';
import { NumberMemoryMainScreen } from  './NumberMemoryMainScreen';

export const NumberMemory = () => {
    return(
        <div className={styles['container']}>
            <NumberMemoryMainScreen />
        </div>
    )
}
import React from 'react';
import styles from '../../styles/Home.module.scss';
import { HomeHeaderSVG } from './HomeHeaderSVG';
import { HomeHeaderText } from './HomeHeaderText';

export const HomeHeader = () => {
    return(
        <div className={styles['header']}>
            <HomeHeaderText />
            <HomeHeaderSVG />
        </div>
    )
}
import React from 'react';
import { HomeCarousel } from './HomeCarousel';
import { HomeHeader } from './HomeHeader';
import { HomeTiles } from './HomeTiles';

export const Home = () => {
    return(
        <div>
            <HomeHeader />
            <HomeCarousel />
            <HomeTiles />
        </div>
    )
}
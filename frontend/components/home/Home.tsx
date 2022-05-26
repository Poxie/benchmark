import React from 'react';
import { HomeCarousel } from './HomeCarousel';
import { HomeHeader } from './HomeHeader';

export const Home = () => {
    return(
        <div>
            <HomeHeader />
            <HomeCarousel />
        </div>
    )
}
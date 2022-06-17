import Head from 'next/head';
import React from 'react';
import { HomeCarousel } from './HomeCarousel';
import { HomeHeader } from './HomeHeader';
import { HomeTiles } from './HomeTiles';

export const Home = () => {
    return(
        <>
            <Head>
                <title>
                    {process.env.NEXT_PUBLIC_WEBSITE_NAME}
                </title>
                <meta name="og:title" content={process.env.NEXT_PUBLIC_WEBSITE_NAME} />
                <meta name="description" content={process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION} />
                <meta name="og:description" content={process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION} />
            </Head>
            
            <HomeHeader />
            <HomeCarousel />
            <HomeTiles />
        </>
    )
}
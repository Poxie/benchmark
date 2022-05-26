import React from 'react';
import { HomeLeaderboardIcon } from '../../icons/HomeLeaderboardIcon';
import { HomeTile } from './HomeTile';

export const HomeTiles = () => {
    return(
        <>
            <HomeTile 
                title={'Play games and increase your rank'}
                description={'There are many different games which allows you to show your skills on your specific skillset with your specific gamemode!'}
                media={<HomeLeaderboardIcon />}
            />
        </>
    )
}
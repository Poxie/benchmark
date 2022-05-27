import React from 'react';
import { HomeLeaderboardAnimation } from './HomeLeaderboardAnimation';
import { HomeTile } from './HomeTile';
import { HomeTileAnimation } from './HomeTileAnimation';

export const HomeTiles = () => {
    return(
        <>
            <HomeTile 
                title={'Play games and increase your rank'}
                description={'There are many different games which allows you to show your skills on your specific skillset with your specific gamemode!'}
                media={<HomeLeaderboardAnimation />}
            />
            <HomeTile 
                title={'Large varity of games and fun'}
                description={'With large varity comes certainty of enjoyment. With confidence we assure you there is something for you here.'}
                media={<HomeTileAnimation />}
            />
        </>
    )
}
import React from 'react';
import styles from '../../styles/AllGames.module.scss';
import { useRouter } from 'next/router';
import { AllGamesRow } from './AllGamesRow';
import { SequenceIcon } from '../../icons/SequenceIcon';
import { ChimpIcon } from '../../icons/ChimpIcon';
import { NumberMemoryIcon } from '../../icons/NumberMemoryIcon';
import { WordMemoryIcon } from '../../icons/WordMemoryIcon';
import { AllGamesHeader } from './AllGamesHeader';
import { AllGamesFilters } from './AllGamesFilters';
import { AllGamesEmpty } from './AllGamesEmpty';
import Head from 'next/head';

const games = {
    memory: [
        { title: 'Memory Sequence', category: 'memory', path: 'memory-sequence', icon: <SequenceIcon /> },
        { title: 'Chimp Test', category: 'memory', path: 'chimp-test', icon: <ChimpIcon /> },
        { title: 'Number Memory', category: 'memory', path: 'number-memory', icon: <NumberMemoryIcon /> },
        { title: 'Word Memory', category: 'memory', path: 'word-memory', icon: <WordMemoryIcon /> },
    ]
}
export const gameKeys = ['featured', ...Object.keys(games)] as GameKeyType[];
export type GameKeyType = keyof typeof games;
export type GameType = typeof games.memory[0];
export type CategoryType = { title: string, items: GameType[] };

const allGames = () => {
    let allGames: CategoryType[] = [];
    Object.entries(games).forEach(([key, values]) => {
        allGames.push({
            title: values[0].category,
            items: values
        })
    });
    return allGames;
}
const filteredGames = (type: GameKeyType) => {
    if(!games[type]?.length) return [];
    return [{
        title: games[type][0].category,
        items: games [type]
    }]
}
export const AllGames = () => {
    const { type='featured' } = useRouter().query as { type: GameKeyType | 'featured' };

    const visibleGames = (type === 'featured' ? allGames() : filteredGames(type)) || [];
    return(
        <>
        <Head>
            <title>
                All games - {process.env.NEXT_PUBLIC_WEBSITE_NAME}
            </title>
            <meta name="og:title" content={`All games - ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`} />
            <meta name="description" content={'All of our tests gathered in one place. Mindgames, typing tests, aiming, and much more.'} />
            <meta name="og:description" content={'All of our tests gathered in one place. Mindgames, typing tests, aiming, and much more.'} />
        </Head>
        
        <div className={styles['container']}>
            <AllGamesHeader />
            <AllGamesFilters />
            {visibleGames.map(games => <AllGamesRow {...games} key={games.title} />)}
            {!visibleGames.length && (
                <AllGamesEmpty />
            )}
        </div>
        </>
    )
}
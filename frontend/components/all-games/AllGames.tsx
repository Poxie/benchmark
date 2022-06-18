import React from 'react';
import styles from '../../styles/AllGames.module.scss';
import { useRouter } from 'next/router';
import { AllGamesRow } from './AllGamesRow';
import { SequenceIcon } from '../../icons/SequenceIcon';
import { ChimpIcon } from '../../icons/ChimpIcon';
import { NumberMemoryIcon } from '../../icons/NumberMemoryIcon';
import { WordMemoryIcon } from '../../icons/WordMemoryIcon';

const games = {
    memory: [
        { title: 'Memory Sequence', category: 'memory', path: 'memory-sequence', icon: <SequenceIcon /> },
        { title: 'Chimp Test', category: 'memory', path: 'chimp-test', icon: <ChimpIcon /> },
        { title: 'Number Memory', category: 'memory', path: 'number-memory', icon: <NumberMemoryIcon /> },
        { title: 'Word Memory', category: 'memory', path: 'word-memory', icon: <WordMemoryIcon /> },
    ]
}
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
    return [{
        title: games[type][0].category,
        items: games [type]
    }]
}
export const AllGames = () => {
    const { type='featured' } = useRouter().query as { type: GameKeyType | 'featured' };

    const visibleGames = (type === 'featured' ? allGames() : filteredGames(type)) || [];
    return(
        <div className={styles['container']}>
            {visibleGames.map(games => <AllGamesRow {...games} key={games.title} />)}
        </div>
    )
}
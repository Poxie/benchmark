import React from 'react';
import styles from '../../styles/AllGames.module.scss';
import { useRouter } from 'next/router';

const games = {
    memory: [
        { title: 'Memory Sequence', category: 'memory', path: 'memory-sequence' },
        { title: 'Chimp Test', category: 'memory', path: 'chimp-test' },
        { title: 'Number Memory', category: 'memory', path: 'number-memory' },
        { title: 'Word Memory', category: 'memory', path: 'word-memory' },
    ]
}
const allGames = () => {
    let allGames: typeof games['memory'] = [];
    Object.values(games).forEach(categoryGames => allGames = [...allGames, ...categoryGames]);
    return allGames;
}
export const AllGames = () => {
    const { type='featured' } = useRouter().query as { type: keyof typeof games | 'featured' };

    const visibleGames = (type === 'featured' ? allGames() : games[type]) || [];
    return(
        <div className={styles['container']}>
            {visibleGames.map(game => game.title)}
        </div>
    )
}
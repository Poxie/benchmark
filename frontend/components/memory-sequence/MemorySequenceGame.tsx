import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from '../../styles/MemorySequence.module.scss';

const getRandomIndex = () => {
    return Math.floor(Math.random() * 9);
}
const createGrid = () => {
    return Array.from(Array(9)).map((_, key) => ({ active: false }));
}
export const MemorySequenceGame: React.FC<{
    onEnd: (score: number) => void;
}> = ({ onEnd }) => {
    const [pressedIndex, setPressedIndex] = useState<number | null>(null);
    const [grid, setGrid] = useState(createGrid());
    const [showingPattern, setShowingPattern] = useState(true);
    const sequence = useRef([getRandomIndex()]);
    const [score, setScore] = useState(0);
    const currentIndex = useRef(0);

    // Checking if user sequence is correct
    const handleClick = useCallback((index: number) => {
        if(showingPattern) return;

        // User pressed incorrect button
        if(index !== sequence.current[currentIndex.current]) {
            return onEnd(score);
        }

        // Correct button pressed
        currentIndex.current++;
        setPressedIndex(index);

        // Restoring pressed index
        setTimeout(() => {
            setPressedIndex(null);
        }, 200);

        setTimeout(() => {
            // If user correctly pressed all buttons in sequence
            if(currentIndex.current > sequence.current.length - 1) {
                sequence.current.push(getRandomIndex());
                setScore(prev => prev + 1);
                currentIndex.current = 0;
                setShowingPattern(true);
            }
        }, 250);
    }, [showingPattern]);

    // Function to display current pattern
    useEffect(() => {
        if(!showingPattern) return;

        const timeouts: NodeJS.Timeout[] = [];
        sequence.current.forEach((item, key) => {
            const timeout = setTimeout(() => {
                // Creating new grid with sequence item as active
                const grid = createGrid();
                grid[item].active = true;
                setGrid(grid);

                // Clearing grid of active items
                const timeout = setTimeout(() => {
                    setGrid(createGrid());

                    // If sequence is at end
                    if(key === sequence.current.length - 1) {
                        setShowingPattern(false);
                    }
                }, 600);
                timeouts.push(timeout);
            }, (key + 1) * 800);
            timeouts.push(timeout);
        });
        
        // Cleaning up current timeouts if unmount
        return () => timeouts.forEach(timeout => clearTimeout(timeout));
    }, [showingPattern]);

    return(
        <div className={styles['grid']}>
            {grid.map((item, key) => {
                const isActive = item.active || key === pressedIndex;

                const className = [
                    styles['button'],
                    isActive ? styles['active'] : ''
                ].join(' ');
                return(
                    <div 
                        className={className}
                        onClick={() => handleClick(key)}
                        key={key}
                    />
                )
            })}
        </div>
    )
}
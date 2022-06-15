import React, { useEffect, useState } from 'react';
import { useDeviceType } from '../../hooks/useDeviceType';
import styles from '../../styles/ChimpTest.module.scss';

type Grid = (null | number)[][];
const getRandomNumber = (max: number) => {
    const randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
}
const setActiveTile = (grid: Grid, index: number) => {
    const rowIndex = getRandomNumber(grid.length);
    const columnIndex = getRandomNumber(grid[0].length);
    let randomTile = grid[rowIndex][columnIndex];

    // If tile is already active, set active tile
    if(randomTile) {
        setActiveTile(grid, index);
        return;
    }

    // Else set tile as active
    grid[rowIndex][columnIndex] = index;
}
const getNewGrid = (tileAmount: number, device: ReturnType<typeof useDeviceType>) => {
    let rowAmount = 12;
    if(device === 'tablet') rowAmount = 8;
    if(device === 'mobile') rowAmount = 5;

    // Creating new grid - 5 rows, 12 columns 
    const grid: Grid = Array.from(Array(5)).map(() => Array.from(Array(rowAmount)).map(() => null));

    // Setting random active tiles
    for(let i = 1; i < tileAmount + 1; i++) {
        setActiveTile(grid, i);
    }

    return grid;
}
export const ChimpTestGame: React.FC<{
    onEnd: (score: number) => void;
}> = ({ onEnd }) => {
    const device = useDeviceType();
    const [score, setScore] = useState(4);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hidden, setHidden] = useState(false);
    const [tileAmount, setTileAmount] = useState(4);
    const [grid, setGrid] = useState(getNewGrid(tileAmount, device));
    const [initialDevice, setInitialDevice] = useState(device);
    const [deviceError, setDeviceError] = useState(false);

    // Changing layout on different screens
    useEffect(() => {
        // Making sure not to update board if tiles are hidden
        // New hidden numbers would randomly spawn, making it impossible to guess.
        if(hidden && device !== initialDevice) return setDeviceError(true);
        setDeviceError(false);

        if(!deviceError) {
            setGrid(getNewGrid(tileAmount, device));
        }
        if(!hidden) {
            setInitialDevice(device);
        }
    }, [device]);

    // Events
    const correct = () => {
        setCurrentIndex(prev => prev + 1);

        // Checking if full sequence is correct
        if(currentIndex === tileAmount) {
            setScore(prev => prev + 1);
            setHidden(false);
            setCurrentIndex(1);
            setTileAmount(tileAmount + 1);
            setGrid(getNewGrid(tileAmount + 1, device));
            setInitialDevice(device);
        }
    }
    const incorrect = () => {
        onEnd(score);
    }

    // Tile methods
    const tileClick = (rowIndex: number, columnIndex: number) => {
        const tile = grid[rowIndex][columnIndex];
        if(tile !== currentIndex) return incorrect();

        // Checking if should hide tiles
        if(currentIndex === 1) {
            setHidden(true);
        }

        correct();
    }

    return(
        <div className={styles['container']}>
            {deviceError && (
                <div className={styles['device-error']}>
                    <h2>
                        You can only change width while tiles are visible.
                    </h2>
                    <h4>
                        Return to previous device width and change width once they are visible.
                    </h4>
                </div>
            )}

            {!deviceError && grid.map((row, rowIndex) => (
                <div className={styles['row']} key={`row-${rowIndex}`}>
                    {row.map((tile, columnIndex) => {
                        const completed = currentIndex > (tile || Infinity);
                        const className = [
                            styles['tile'],
                            tile ? styles['active'] : '',
                            hidden ? styles['hidden'] : '',
                            completed ? styles['completed'] : ''
                        ].join(' ');
                        return(
                            <button 
                                className={className} 
                                key={`column-${columnIndex}`}
                                onClick={() => {
                                    if(completed || !tile) return;
                                    tileClick(rowIndex, columnIndex);
                                }}
                                tabIndex={(tile && !completed) ? 0 : -1}
                            >
                                {!hidden && tile}
                            </button>
                        )
                    })}
                </div>
            ))}
        </div>
    )
}
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/NumberMemory.module.scss';
import { NumberMemoryCountdown } from './NumberMemoryCountDown';

const getRandomNumber = () => {
    const number = Math.floor(Math.random() * 10);
    return number;
}
export const NumberMemoryGame: React.FC<{
    onEnd: (score: number) => void
}> = ({ onEnd }) => {
    const [score, setScore] = useState(0); 
    const [isViewing, setIsViewing] = useState(true);
    const [number, setNumber] = useState(getRandomNumber());
    const input = useRef<HTMLInputElement>(null);

    // Creating new number and increasing score
    const nextNumber = () => {
        setScore(prev => prev + 1);
        const newNumber = getRandomNumber();
        setNumber(prev => parseInt(prev.toString() + newNumber.toString()));
        setIsViewing(true);
    }
    // On coundown end
    const countdownEnd = () => {
        setIsViewing(false);
    }
    // Compare answer with actual number
    const checkAnswer = (input: number, number: number) => {
        if(input === number) {
            nextNumber();
        } else {
            onEnd(score);
        }
    }
    // If key is enter, compare input with actual number
    const updateInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            checkAnswer(parseInt(e.currentTarget.value), number);
        }
    }

    // Auto focusing input
    useEffect(() => {
        if(!isViewing) input.current?.focus();
    }, [isViewing]);

    return(
        <>
            {isViewing && (
                <span className={styles['number']}>
                    {number}
                </span>
            )}
            {!isViewing && (
                <div>
                    <h1>
                        What number was shown?
                    </h1>
                    <input 
                        type="text"
                        onKeyDown={updateInput}
                        ref={input}
                    />
                </div>
            )}
            
            {isViewing && (
                <NumberMemoryCountdown 
                    duration={5000}
                    onEnd={countdownEnd}
                />
            )}
        </>
    )
}
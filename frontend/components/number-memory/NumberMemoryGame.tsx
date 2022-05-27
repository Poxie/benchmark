import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/NumberMemory.module.scss';
import { Countdown } from '../game-components/Countdown';

const getRandomNumber = (length: number) => {
    let number = '';
    for(let i = 0; i < length; i++) {
        number += Math.floor(Math.random() * 10).toString();
    }
    return number;
}
export const NumberMemoryGame: React.FC<{
    onEnd: (score: number) => void
}> = ({ onEnd }) => {
    const [score, setScore] = useState(0); 
    const [isViewing, setIsViewing] = useState(true);
    const [number, setNumber] = useState(getRandomNumber(1));
    const input = useRef<HTMLInputElement>(null);

    // Creating new number and increasing score
    const nextNumber = () => {
        setScore(prev => prev + 1);
        const newNumber = getRandomNumber(number.toString().length + 1);
        setNumber(newNumber);
        setIsViewing(true);
    }
    // On coundown end
    const countdownEnd = () => {
        setIsViewing(false);
    }
    // Compare answer with actual number
    const checkAnswer = (input: string, number: string) => {
        if(input === number) {
            nextNumber();
        } else {
            onEnd(score);
        }
    }
    // If key is enter, compare input with actual number
    const updateInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            checkAnswer(e.currentTarget.value, number);
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
                <Countdown 
                    duration={5000}
                    onEnd={countdownEnd}
                />
            )}
        </>
    )
}
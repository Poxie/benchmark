import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/WordMemory.module.scss';
import { HeartIcon } from '../../icons/HeartIcon';
import { Button } from '../button';

const getRandomWord: (words: string[], prevWords: string[], prevWord?: string) => string = (words, prevWords, prevWord) => {
    const randomNumber = Math.floor(Math.random() * words.length);
    const word = words[randomNumber];
    if(prevWords.includes(word) || word === prevWord) return getRandomWord(words, prevWords);

    return word;
}
export const WordMemoryGame: React.FC<{
    onEnd: (score: number) => void;
}> = ({ onEnd }) => {
    const [currentWord, setCurrentWord] = useState<string>('');
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const previousWords = useRef<string[]>([]);
    const fetching = useRef(false);
    const allWords = useRef([]);

    // Picking current word
    const newWord = () => {
        const percent = Math.random();

        // If less than .5 or about threshold, pick previously seen word, else pick new word
        if(percent <= .5 && previousWords.current.length > 2) {
            setCurrentWord(getRandomWord(previousWords.current, [], currentWord));
        } else {
            setCurrentWord(getRandomWord(allWords.current, previousWords.current, currentWord));
        }
    }
    // Pushing word to previous array if it doesn't exist
    const shouldPushWord = () => {
        if(!previousWords.current.includes(currentWord)) {
            previousWords.current.push(currentWord);
        }
    }
    // If user is correct
    const correct = () => {
        shouldPushWord();
        newWord();
        setScore(prev => prev + 1);
    }
    // If user is incorrect
    const incorrect = () => {
        shouldPushWord();

        // Updating user lives
        setLives(prev => {
            const newLives = prev - 1;

            // If no lives left, end game, else show new word
            if(newLives <= 0) {
                onEnd(score);
            } else {
                newWord();
            }
            return newLives;
        });
    }
    // Handling user input - seen button
    const isSeenWord = () => {
        if(!previousWords.current.includes(currentWord)) {
            incorrect();
        } else {
            correct();
        }
    }
    // Handling user input - new word button
    const isNewWord = () => {
        if(!previousWords.current.includes(currentWord)) {
            correct();
        } else {
            incorrect();
        }
    }

    // Initial fetching for words
    useEffect(() => {
        if(fetching.current) return;

        fetch(process.env.NEXT_PUBLIC_WORD_API).then(res => res.json()).then(words => {
            allWords.current = words;
            setCurrentWord(getRandomWord(words, []));
        })
        fetching.current = true;
    }, []);

    return(
        <div className={styles['container']}>
            <div className={styles['stats']}>
                <div className={styles['lives']}>
                    {Array.from(Array(lives)).map(() => <HeartIcon />)}
                </div>
                
                <span>
                    Score: {score}
                </span>
            </div>

            <h1>
                {!currentWord ? (
                    'Loading...'
                ) : (
                    currentWord
                )}
            </h1>
            <div className={styles['button-container']}>
                <Button 
                    type={'light'} 
                    className={styles['button']}
                    onClick={currentWord ? isSeenWord : undefined}
                >
                    Seen
                </Button>
                <Button 
                    type={'light'} 
                    className={styles['button']}
                    onClick={currentWord ? isNewWord : undefined}
                >
                    New
                </Button>
            </div>
        </div>
    )
}
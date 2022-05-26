import React from 'react';
import { AimTrainingIcon } from '../../icons/AimTrainingIcon';
import { ChimpIcon } from '../../icons/ChimpIcon';
import { NumberMemoryIcon } from '../../icons/NumberMemoryIcon';
import { ReactionTimeIcon } from '../../icons/ReactionTimeIcon';
import { SequenceIcon } from '../../icons/SequenceIcon';
import { TypingIcon } from '../../icons/TypingIcon';
import { WordMemoryIcon } from '../../icons/WordMemoryIcon';
import styles from '../../styles/Home.module.scss';
import { Carousel } from '../carousel/Carousel';
import { HomeCarouselItem } from './HomeCarouselItem';

const items = [
    { text: 'Memory Sequence', category: 'Memory', path: '/memory-sequence', icon: SequenceIcon },
    { text: 'Chimp Test', category: 'Memory', path: '/chimp-test', icon: ChimpIcon },
    { text: 'Number Memory', category: 'Memory', path: '/numeber-memory', icon: NumberMemoryIcon },
    { text: 'Word Memory', category: 'Memory', path: '/word-memory', icon: WordMemoryIcon },
    { text: 'Aim Training', category: 'Aim', path: '/aim-training', icon: AimTrainingIcon },
    { text: 'Typing Speed', category: 'Typing', path: '/typing-speed', icon: TypingIcon },
    { text: 'Reaction Time', category: 'Reaction', path: '/reaction-time', icon: ReactionTimeIcon }
];
export const HomeCarousel = () => {
    return(
        <div className={styles['carousel']}>
            <Carousel 
                items={items}
                itemGap={25}
                renderItem={HomeCarouselItem}
            />
        </div>
    )
}
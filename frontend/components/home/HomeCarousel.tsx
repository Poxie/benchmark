import React from 'react';
import { useDeviceType } from '../../hooks/useDeviceType';
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
    { text: 'Memory Sequence', category: 'Memory', path: '/memory-sequence', icon: SequenceIcon, comingSoon: false, isBeta: true },
    { text: 'Chimp Test', category: 'Memory', path: '/chimp-test', icon: ChimpIcon, comingSoon: false, isBeta: true },
    { text: 'Number Memory', category: 'Memory', path: '/number-memory', icon: NumberMemoryIcon, comingSoon: false, isBeta: true },
    { text: 'Word Memory', category: 'Memory', path: '/word-memory', icon: WordMemoryIcon, comingSoon: false, isBeta: true },
    { text: 'Aim Training', category: 'Aim', path: '/aim-training', icon: AimTrainingIcon, comingSoon: true },
    { text: 'Typing Speed', category: 'Typing', path: '/typing-speed', icon: TypingIcon, comingSoon: true },
    { text: 'Reaction Time', category: 'Reaction', path: '/reaction-time', icon: ReactionTimeIcon, comingSoon: true }
];
export const HomeCarousel = () => {
    const device = useDeviceType();
    return(
        <div className={styles['carousel']}>
            <Carousel 
                items={items}
                itemGap={device !== 'mobile' ? 25 : 10}
                renderItem={HomeCarouselItem}
            />
        </div>
    )
}
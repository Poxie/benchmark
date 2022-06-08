import React, { useState } from 'react';
import styles from '../../../styles/Profile.module.scss';
import { HighScore } from '../../../redux/profile/types';
import { ProfileOverviewHighScoreStats } from './ProfileOverviewHighScoreStats';
import { ProfileOverviewHighScoreHeader } from './ProfileOverviewHighScoreHeader';
import { AnimatePresence, motion } from 'framer-motion';

export const ProfileOverviewHighScore: React.FC<HighScore> = ({ game, ranking, score }) => {
    const [active, setActive] = useState(false);

    // Methods
    const toggleActive = () => setActive(!active);

    const className = [
        styles['high-score'],
        active ? styles['active'] : ''
    ].join(' ');
    return(
        <div 
            className={className} 
            onClick={toggleActive}
        >
            <ProfileOverviewHighScoreHeader 
                game={game}
                score={score}
                onClick={toggleActive}
            />

            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0, scale: .98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: .98 }}
                        transition={{ duration: .3 }}
                    >
                        <ProfileOverviewHighScoreStats gameId={game.id} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
import React, { useState } from 'react';
import styles from '../../../styles/Profile.module.scss';
import { HighScore } from '../../../redux/profile/types';
import { FilledArrowIcon } from '../../../icons/FilledArrowIcon';
import Link from 'next/link';
import { ProfileOverviewHighScoreStats } from './ProfileOverviewHighScoreStats';
import { ProfileOverviewHighScoreHeader } from './ProfileOverviewHighScoreHeader';

export const ProfileOverviewHighScore: React.FC<HighScore> = ({ game, position, score }) => {
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

            {active && (
                <ProfileOverviewHighScoreStats gameId={game.id} />
            )}
        </div>
    )
}
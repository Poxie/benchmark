import React from 'react';
import styles from '../../../styles/Profile.module.scss';

const months = [
    'Jan', 'Feb', 'Mar', 
    'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 
    'Oct', 'Nov', 'Dec'
]
const getReadableTime = (timestamp: string) => {
    const time = new Date(parseInt(timestamp));
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    let dateExt;
    switch(date.toString()[-1]) {
        case '1':
            dateExt = 'st';
            break;
        case '2':
            dateExt = 'nd';
            break
        case '3':
            dateExt = 'rd';
            break;
        default:
            dateExt = 'th';
    }

    return `${months[month]} ${date}${dateExt}, ${year}`;
}
export const HighScoreStatsHeader: React.FC<{
    lastPlayed: string
}> = ({ lastPlayed }) => {
    return(
        <div className={styles['stats-header']}>
            Last played on {getReadableTime(lastPlayed)}
        </div>
    )
}
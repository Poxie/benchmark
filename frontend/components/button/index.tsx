import React from 'react';
import styles from '../../styles/Button.module.scss';

export const Button: React.FC<{
    children: any;
    onClick?: () => void;
}> = ({ onClick, children }) => {
    return(
        <div 
            className={styles['container']}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
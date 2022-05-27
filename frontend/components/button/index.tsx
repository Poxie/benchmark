import React from 'react';
import styles from '../../styles/Button.module.scss';

export const Button: React.FC<{
    children: any;
    onClick?: () => void;
    type?: 'primary' | 'light';
    className?: string;
}> = ({ onClick, children, type='primary', className }) => {
    className = [
        styles['container'],
        styles[type],
        className
    ].join(' ');
    return(
        <div 
            className={className}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
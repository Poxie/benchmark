import React from 'react';
import styles from '../../styles/Button.module.scss';

export const Button: React.FC<{
    children: any;
    onClick?: () => void;
    type?: 'primary' | 'light';
    className?: string;
    disabled?: boolean;
}> = ({ onClick, children, type='primary', className, disabled }) => {
    className = [
        styles['container'],
        styles[type],
        className,
        disabled ? styles['disabled'] : ''
    ].join(' ');
    return(
        <div 
            className={className}
            onClick={!disabled ? onClick : undefined}
        >
            {children}
        </div>
    )
}
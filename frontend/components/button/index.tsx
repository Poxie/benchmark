import React from 'react';
import styles from '../../styles/Button.module.scss';
import { LoadingSpinner } from '../loading-spinner/LoadingSpinner';

export const Button: React.FC<{
    children: any;
    onClick?: () => void;
    type?: 'primary' | 'light';
    className?: string;
    disabled?: boolean;
    loading?: boolean;
}> = ({ onClick, children, type='primary', className, disabled, loading }) => {
    className = [
        styles['container'],
        styles[type],
        className,
        disabled ? styles['disabled'] : ''
    ].join(' ');
    return(
        <button 
            className={className}
            onClick={!(disabled || loading) ? onClick : undefined}
        >
            {!loading && children}
            {loading && <LoadingSpinner className={styles['loading-icon']} />}
        </button>
    )
}
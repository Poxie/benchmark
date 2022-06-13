import React from 'react';
import styles from '../styles/Popup.module.scss';
import { usePopup } from '../contexts/PopupProvider';

export type ItemType = {
    text: string;
    onClick?: () => void;
    closeOnClick?: boolean;
    type?: 'default' | 'danger';
    disabled?: boolean;
    icon?: any;
}
export const PopupItem: React.FC<ItemType> = ({ text, onClick, icon, disabled, closeOnClick=true, type='default' }) => {
    const { closePopups } = usePopup();

    const className = [
        styles['item'],
        styles[type],
        disabled ? styles['disabled'] : ''
    ].join(' ');
    return(
        <div className={className} onClick={() => {
            if(disabled) return;
            onClick && onClick();
            closeOnClick && closePopups();
        }}>
            <span>
                {text}
            </span>
            
            {icon}
        </div>
    )
}
import React from 'react';
import styles from '../styles/Popup.module.scss';
import { usePopup } from '../contexts/PopupProvider';

export type ItemType = {
    text: string;
    onClick?: () => void;
    closeOnClick?: boolean;
    type?: 'default' | 'danger';
    disabled?: boolean;
    active?: boolean;
    icon?: any;
}
export const PopupItem: React.FC<ItemType> = ({ text, onClick, icon, disabled, active, closeOnClick=true, type='default' }) => {
    const { closePopups } = usePopup();

    const className = [
        styles['item'],
        styles[type],
        disabled ? styles['disabled'] : '',
        active ? styles['active'] : ''
    ].join(' ');
    return(
        <a 
            href={'#'}
            className={className} 
            onClick={e => {
                e.preventDefault();
                if(disabled) return;
                onClick && onClick();
                closeOnClick && closePopups();
            }}
        >
            <span>
                {text}
            </span>
            
            {icon}
        </a>
    )
}
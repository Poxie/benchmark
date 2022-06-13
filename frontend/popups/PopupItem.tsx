import React from 'react';
import styles from '../styles/Popup.module.scss';
import { usePopup } from '../contexts/PopupProvider';

export type ItemType = {
    text: string;
    onClick?: () => void;
    closeOnClick?: boolean;
    type?: 'default' | 'danger';
    icon?: any;
}
export const PopupItem: React.FC<ItemType> = ({ text, onClick, icon, closeOnClick=true, type='default' }) => {
    const { closePopups } = usePopup();

    const className = [
        styles['item'],
        styles[type]
    ].join(' ');
    return(
        <div className={className} onClick={() => {
            onClick && onClick();
            closeOnClick && closePopups();
        }}>
            <span>
                {text}
            </span>
            <div>
                {icon}
            </div>
        </div>
    )
}
import React from 'react';
import { usePopup } from '../../contexts/PopupProvider';
import styles from './NavbarUserPopup.module.scss';

export const NavbarUserPopupItem: React.FC<{
    text?: string;
    onClick?: () => void;
    type?: string;
}> = ({ text, onClick, type='default' }) => {
    const { closePopups } = usePopup();

    const className = [
        styles['item'],
        styles[type]
    ].join(' ');
    return(
        <div className={className} onClick={() => {
            if(!onClick) return;
            onClick();
            closePopups();
        }}>
            {text}
        </div>
    )
}
import React from 'react';
import styles from './NavbarUserPopup.module.scss';

export const NavbarUserPopupItem: React.FC<{
    text: string;
    onClick: () => void;
    type: string;
}> = ({ text, onClick, type }) => {
    const className = [
        styles['item'],
        styles[type]
    ].join(' ');
    return(
        <div className={className} onClick={onClick}>
            {text}
        </div>
    )
}
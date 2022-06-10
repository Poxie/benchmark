import React from 'react';
import { NavbarUserPopupItem as ItemType } from './NavbarUserPopup';
import styles from './NavbarUserPopup.module.scss';
import { NavbarUserPopupItem } from './NavbarUserPopupItem';

export const NavbarUserPopupGroup: React.FC<{
    items: ItemType[];
}> = ({ items }) => {
    return(
        <div className={styles['group']}>
            {items.map(item => <NavbarUserPopupItem {...item} key={item.text} />)}
        </div>
    )
}
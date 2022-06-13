import React from 'react';
import styles from '../styles/Popup.module.scss';
import { ItemType, PopupItem } from './PopupItem';

export const PopupGroup: React.FC<{
    items: ItemType[];
}> = ({ items }) => {
    return(
        <div className={styles['group']}>
            {items.map(item => <PopupItem {...item} key={item.text} />)}
        </div>
    )
}
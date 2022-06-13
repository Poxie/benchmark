import React from 'react';
import { usePopup } from '../../contexts/PopupProvider';
import { ArrowDefaultIcon } from '../../icons/ArrowDefaultIcon';
import { PopupGroup } from '../PopupGroup';
import { ItemType } from '../PopupItem';
import styles from './SettingsPopup.module.scss';
import { ThemePopup } from './theme/ThemePopup';

export const SettingsPopup = () => {
    const { pushPopup } = usePopup();

    const groups = [
        [
            { text: 'Theme', onClick: () => pushPopup(<ThemePopup />, undefined, { title: 'Theme' }), icon: <ArrowDefaultIcon />, closeOnClick: false }
        ]
    ] as ItemType[][];

    return(
        <>
        {groups.map((group, key) => <PopupGroup items={group} key={`group-${key}`} />)}
        </>
    )
}
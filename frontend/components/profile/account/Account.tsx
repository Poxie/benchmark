import React from 'react';
import styles from '../../../styles/Account.module.scss';
import { useAppSelector } from '../../../redux/store';
import { selectUserInfo } from '../../../redux/user/selectors';
import { Input } from '../../input';
import { AccountDetails } from './AccountDetails';

export const Account = () => {
    const info = useAppSelector(selectUserInfo);
    if(!info) return null;

    const { username } = info;
    return(
        <div className={styles['container']}>
            <AccountDetails />
        </div>
    )
}
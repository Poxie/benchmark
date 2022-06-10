import React from 'react';
import styles from '../../../styles/Account.module.scss';
import { useAppSelector } from '../../../redux/store';
import { selectUserInfo } from '../../../redux/user/selectors';
import { Input } from '../../input';
import { AccountDetails } from './AccountDetails';
import Head from 'next/head';

export const Account = () => {
    const info = useAppSelector(selectUserInfo);
    if(!info) return null;

    const { username } = info;
    return(
        <>
        <Head>
            <title>
                Account - {process.env.NEXT_PUBLIC_WEBSITE_NAME}
            </title>
        </Head>
        <div className={styles['container']}>
            <AccountDetails />
        </div>
        </>
    )
}
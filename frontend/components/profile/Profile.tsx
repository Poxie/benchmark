import { useQuery } from '@apollo/client';
import React from 'react';
import { selectProfileIdentity } from '../../redux/profile/selectors';
import { useAppSelector } from '../../redux/store';
import styles from '../../styles/Profile.module.scss';

export const Profile = () => {
    const identity = useAppSelector(selectProfileIdentity);
    console.log(identity);
    return(
        <div className={styles['container']}>
            profile
        </div>
    )
}
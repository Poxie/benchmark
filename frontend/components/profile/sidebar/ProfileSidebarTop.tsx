import React from 'react';
import styles from '../../../styles/Profile.module.scss';
import { selectProfileIdentity, selectProfileIsLoading } from '../../../redux/profile/selectors';
import { useAppSelector } from '../../../redux/store';

export const ProfileSidebarTop = () => {
    const loading = useAppSelector(selectProfileIsLoading);
    const identity = useAppSelector(selectProfileIdentity);

    if(loading || !identity) return null;

    return(
        <div className={styles['sidebar-top']}>
            {/* Once profile avatar is available, add conditional logic for it here */}
            {/* <div className={styles['avatar']}>
                ?
            </div> */}
            <span className={styles['username']}>
                {identity.username}
            </span>
        </div>
    )
}
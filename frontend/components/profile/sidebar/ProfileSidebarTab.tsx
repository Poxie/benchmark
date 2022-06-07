import React from 'react';
import styles from '../../../styles/Profile.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { selectProfileIdentity } from '../../../redux/profile/selectors';
import { useAppSelector } from '../../../redux/store';
import { SidebarTab } from './ProfileSidebarSections';

export const ProfileSidebarTab: React.FC<SidebarTab> = ({ path, text, type }) => {
    const { asPath } = useRouter();
    const profile = useAppSelector(selectProfileIdentity);
    if(!profile) return null;

    const { username } = profile;

    const href = `/profile/${username}/${path}`;
    const active = href === asPath;

    const className = [
        styles['sidebar-tab'],
        active ? styles['active'] : '',
        type ? styles[type] : ''
    ].join(' ');
    return(
        <Link href={href} key={path}>
            <div className={className}>
                {text}
            </div>
        </Link>
    )
}
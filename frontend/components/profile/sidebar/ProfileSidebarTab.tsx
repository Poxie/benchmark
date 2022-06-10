import React from 'react';
import styles from '../../../styles/Profile.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { selectProfileIdentity } from '../../../redux/profile/selectors';
import { useAppSelector } from '../../../redux/store';
import { SidebarTab } from './ProfileSidebarSections';

export const ProfileSidebarTab: React.FC<SidebarTab> = ({ path, text, type, onClick }) => {
    const { asPath } = useRouter();
    const profile = useAppSelector(selectProfileIdentity);
    if(!profile) return null;

    const { username } = profile;

    const href = path ? `/profile/${username}/${path}` : `/profile/${username}`;
    const active = href === asPath;

    const className = [
        styles['sidebar-tab'],
        active ? styles['active'] : '',
        type ? styles[type] : ''
    ].join(' ');

    const tab = (
        <div className={className} onClick={onClick}>
            {text}
        </div>
    );
    
    // If path undefined, just return tab
    if(!path) {
        return tab;
    }
    return(
        <Link href={href} key={path}>
            {tab}
        </Link>
    )
}
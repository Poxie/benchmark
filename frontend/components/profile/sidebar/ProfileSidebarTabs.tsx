import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { selectProfileIdentity } from '../../../redux/profile/selectors';
import { useAppSelector } from '../../../redux/store';
import styles from '../../../styles/Profile.module.scss';

const tabs = [
    { text: 'Overview', path: `` },
    { text: 'Number Memory', path: 'number-memory' },
    { text: 'Word Memory', path: 'word-memory' },
    { text: 'Memory Sequence', path: 'memory-sequence' },
    { text: 'Aim Accuracy', path: 'aim-accuracy' }
];
export const ProfileSidebarTabs = () => {
    const { asPath } = useRouter();
    const profile = useAppSelector(selectProfileIdentity);
    if(!profile) return null;

    const { username } = profile;
    return(
        <div className={styles['sidebar-tabs']}>
            {tabs.map(tab => {
                const { text, path } = tab;
                const href = `/profile/${username}/${path}`;
                const active = href === asPath + '/';

                const className = [
                    styles['sidebar-tab'],
                    active ? styles['active'] : ''
                ].join(' ');
                return(
                    <Link href={href} key={path}>
                        <div className={className}>
                            {tab.text}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
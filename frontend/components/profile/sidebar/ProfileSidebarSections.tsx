import React from 'react';
import styles from '../../../styles/Profile.module.scss';
import { ProfileSidebarSection } from './ProfileSidebarSection';

export type SidebarTab = {
    text: string;
    path: string;
    type?: 'danger'
};
export type SidebarSection = SidebarTab[];

const tabs = [
    { text: 'Overview', path: `overview` },
    { text: 'Number Memory', path: 'number-memory' },
    { text: 'Word Memory', path: 'word-memory' },
    { text: 'Memory Sequence', path: 'memory-sequence' },
    { text: 'Aim Accuracy', path: 'aim-accuracy' }
];
const accountTabs = [
    { text: 'Manage Account', path: 'account' },
    { text: 'Log out', path: 'log-out', type: 'danger' }
]
const sections = [
    tabs,
    accountTabs
]
export const ProfileSidebarTabs = () => {
    return(
        <div className={styles['sidebar-sections']}>
            {sections.map((section, key) => {
                return(
                    <ProfileSidebarSection 
                        tabs={section}
                        key={key}
                    />
                )
            })}
        </div>
    )
}
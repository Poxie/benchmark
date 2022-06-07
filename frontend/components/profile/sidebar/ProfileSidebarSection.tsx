import React from 'react';
import styles from '../../../styles/Profile.module.scss';
import { SidebarSection } from './ProfileSidebarSections';
import { ProfileSidebarTab } from './ProfileSidebarTab';

export const ProfileSidebarSection: React.FC<{
    tabs: SidebarSection;
}> = ({ tabs }) => {
    return(
        <div className={styles['sidebar-section']}>
            {tabs.map(tab => <ProfileSidebarTab {...tab} key={tab.path} />)}
        </div>
    )
}
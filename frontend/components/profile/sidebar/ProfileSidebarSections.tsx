import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_GAMES } from '../../../graphql/queries';
import { selectProfileIsMe } from '../../../redux/profile/selectors';
import { Game } from '../../../redux/profile/types';
import { useAppSelector } from '../../../redux/store';
import styles from '../../../styles/Profile.module.scss';
import { ProfileSidebarSection } from './ProfileSidebarSection';

export type SidebarTab = {
    text: string;
    path?: string;
    onClick?: () => void;
    type?: 'danger'
};
export type SidebarSection = SidebarTab[];

export const ProfileSidebarTabs = () => {
    const isMe = useAppSelector(selectProfileIsMe);
    
    // Fetching current games
    const { data, loading } = useQuery(GET_GAMES);

    if(loading) return null;

    // Creating tab array
    const games: Game[] = data.getGames;
    const gameTabs = games.map(game => ({
        text: game.title,
        path: game.id
    }));
    gameTabs.unshift({
        text: 'Overview',
        path: 'overview'
    })

    // Defining sidebar sections
    const sections = [gameTabs] as SidebarSection[];

    // Logged in options
    const logout = () => {
        window.localStorage.removeItem('token');
        window.location.reload();
    }
    const accountTabs = [
        { text: 'Manage Account', path: 'account' },
        { text: 'Log out', onClick: logout, type: 'danger' }
    ] as SidebarSection;
    if(isMe) sections.push(accountTabs);

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
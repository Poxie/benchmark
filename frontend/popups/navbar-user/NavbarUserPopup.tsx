import React, { useId } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../redux/store';
import { selectUserInfo } from '../../redux/user/selectors';
import { NavbarUserPopupGroup } from './NavbarUserPopupGroup';
import { NavbarUserPopupItem } from './NavbarUserPopupItem';

export type NavbarUserPopupItem = {
    text: string;
    onClick: () => void;
    type?: string;
}
export const NavbarUserPopup = () => {
    const router = useRouter();
    const username = useAppSelector(selectUserInfo)?.username;

    const redirect = (path: string) => router.push(path);
    
    const logout = () => {
        window.localStorage.removeItem('token');
        window.location.reload();
    }

    const groups = [
        [
            { text: 'Profile', onClick: () => redirect(`/profile/${username}/overview`) }
        ],
        [
            { text: 'Account', onClick: () => redirect(`/profile/${username}/account`) },
            { text: 'Log out', type: 'danger', onClick: logout }
        ]
    ];
    return(
        <>
            {groups.map((group, key) => (
                <NavbarUserPopupGroup items={group} key={`group-${key}`} />
            ))}
        </>
    )
}
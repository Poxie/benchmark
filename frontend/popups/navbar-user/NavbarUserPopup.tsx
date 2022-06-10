import { useRouter } from 'next/router';
import React, { useId } from 'react';
import { useAppSelector } from '../../redux/store';
import { selectUserInfo } from '../../redux/user/selectors';
import { NavbarUserPopupItem } from './NavbarUserPopupItem';

export const NavbarUserPopup = () => {
    const router = useRouter();
    const username = useAppSelector(selectUserInfo)?.username;

    const redirect = (path: string) => router.push(path);
    
    const logout = () => {
        window.localStorage.removeItem('token');
        window.location.reload();
    }

    const items = [
        { text: 'Profile', onClick: () => redirect(`/profile/${username}/overview`) },
        { type: 'separator' },
        { text: 'Account', onClick: () => redirect(`/profile/${username}/account`) },
        { text: 'Log out', type: 'danger', onClick: logout }
    ]
    return(
        <>
            {items.map(item => (
                <NavbarUserPopupItem {...item} key={item.text} />
            ))}
        </>
    )
}
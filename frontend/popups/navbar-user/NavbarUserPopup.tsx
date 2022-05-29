import React from 'react';
import { NavbarUserPopupItem } from './NavbarUserPopupItem';

export const NavbarUserPopup = () => {
    const logout = () => {
        window.localStorage.removeItem('token');
        window.location.reload();
    }

    const items = [
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
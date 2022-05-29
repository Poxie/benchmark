import React, { useRef } from 'react';
import { usePopup } from '../../contexts/PopupProvider';
import { NavbarUserPopup } from '../../popups/navbar-user/NavbarUserPopup';
import { User } from '../../redux/user/types';

export const NavbarUser: React.FC<{
    user: User;
}> = ({ user: { id, username } }) => {
    const { setPopup } = usePopup();
    const ref = useRef<HTMLDivElement>(null);

    return(
        <div onClick={() => setPopup(<NavbarUserPopup />, ref)} ref={ref}>
            {username}
        </div>
    )
}
import React, { useRef } from 'react';
import styles from '../../styles/Navbar.module.scss';
import { usePopup } from '../../contexts/PopupProvider';
import { NavbarUserPopup } from '../../popups/navbar-user/NavbarUserPopup';
import { User } from '../../redux/user/types';

export const NavbarUser: React.FC<{
    user: User;
}> = ({ user: { id, username } }) => {
    const { setPopup } = usePopup();
    const ref = useRef<HTMLDivElement>(null);

    return(
        <div 
            className={styles['user']}
            onClick={() => setPopup(<NavbarUserPopup />, ref)} 
            ref={ref}
        >
            {username}
        </div>
    )
}
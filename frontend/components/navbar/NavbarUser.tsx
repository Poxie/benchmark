import React, { useRef } from 'react';
import styles from '../../styles/Navbar.module.scss';
import { usePopup } from '../../contexts/PopupProvider';
import { NavbarUserPopup } from '../../popups/navbar-user/NavbarUserPopup';
import { User } from '../../redux/user/types';
import { useDeviceType } from '../../hooks/useDeviceType';

export const NavbarUser: React.FC<{
    user: User;
}> = ({ user: { id, username } }) => {
    const { setPopup } = usePopup();
    const ref = useRef<HTMLButtonElement>(null);
    const deviceType = useDeviceType();

    return(
        <button 
            className={styles['user']}
            onClick={() => setPopup(<NavbarUserPopup />, ref, { centered: deviceType === 'mobile' })} 
            ref={ref}
        >
            {username}
        </button>
    )
}
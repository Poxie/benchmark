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
    const ref = useRef<HTMLDivElement>(null);
    const deviceType = useDeviceType();

    return(
        <div 
            className={styles['user']}
            onClick={() => setPopup(<NavbarUserPopup />, ref, { centered: deviceType === 'mobile' })} 
            ref={ref}
        >
            {username}
        </div>
    )
}
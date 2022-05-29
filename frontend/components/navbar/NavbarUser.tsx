import React from 'react';
import { User } from '../../redux/user/types';

export const NavbarUser: React.FC<{
    user: User;
}> = ({ user: { id, username } }) => {
    return(
        <div>
            {username}
        </div>
    )
}
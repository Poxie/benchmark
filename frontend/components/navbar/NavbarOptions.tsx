import React from 'react';
import { useAppSelector } from '../../redux/store';
import { selectUserInfo, selectUserIsLoading } from '../../redux/user/selectors';
import { Button } from '../button';
import { NavbarUser } from './NavbarUser';

export const NavbarOptions = () => {
    const loading = useAppSelector(selectUserIsLoading);
    const userInfo = useAppSelector(selectUserInfo);

    // Return null while user is loading
    if(loading) return null;

    return(
        userInfo ? (
            <NavbarUser user={userInfo} />
        ) : (
            <Button>
                Sign in
            </Button>
        )
    )
}
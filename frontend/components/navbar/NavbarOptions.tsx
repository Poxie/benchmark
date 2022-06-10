import { useRouter } from 'next/router';
import React from 'react';
import { useAppSelector } from '../../redux/store';
import { selectUserInfo, selectUserIsLoading } from '../../redux/user/selectors';
import { Button } from '../button';
import { NavbarUser } from './NavbarUser';

export const NavbarOptions = () => {
    const router = useRouter();
    const loading = useAppSelector(selectUserIsLoading);
    const userInfo = useAppSelector(selectUserInfo);

    // Return null while user is loading
    if(loading) return null;

    return(
        userInfo ? (
            <NavbarUser user={userInfo} />
        ) : (
            <Button onClick={() => router.push(`/login?redirect_uri=${encodeURIComponent(router.asPath)}`)}>
                Sign in
            </Button>
        )
    )
}
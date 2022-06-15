import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Navbar.module.scss';

export const NavbarTitle = () => {
    return(
        <h2 className={styles['title']}>
            <Link href="/">
                {process.env.NEXT_PUBLIC_WEBSITE_NAME}
            </Link>
        </h2>
    )
}
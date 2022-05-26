import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Navbar.module.scss';

export const NavbarTitle = () => {
    return(
        <Link href="/">
            <h2 className={styles['title']}>
                {process.env.NEXT_PUBLIC_WEBSITE_NAME}
            </h2>
        </Link>
    )
}
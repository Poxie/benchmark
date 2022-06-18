import React from 'react';
import styles from '../../styles/Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavbarTab: React.FC<{
    title: string;
    type: string;
}> = ({ title, type }) => {
    const { type: param } = useRouter().query;
    const path = `/all-games?type=${type}`;
    const active = param === type;

    const className = [
        styles['tab'],
        active ? styles['active'] : ''
    ].join(' ');
    return(
        <div className={className}>
            <Link href={path}>
                {title}
            </Link>
        </div>
    )
}
import React from 'react';
import Link from 'next/link';

export const NavbarTab: React.FC<{
    title: string;
    path: string;
}> = ({ title, path }) => {
    return(
        <Link href={path}>
            {title}
        </Link>
    )
}
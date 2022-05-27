import Link from 'next/link';
import React from 'react';
import { FooterAboutItem } from './FooterSections';

export const FooterTab: React.FC<FooterAboutItem> = ({ text, path, external }) => {
    const content = external ? (
        <a href={path}>
            {text}
        </a>
    ) : (
        <Link href={path}>
            {text}
        </Link>
    )

    return content;
}
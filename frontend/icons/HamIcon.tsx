import React from 'react';

export const HamIcon: React.FC<{
    onClick?: () => void;
    className?: string;
}> = ({ onClick, className }) => {
    return(
        <svg onClick={onClick} className={className} viewBox="10 10 13 12" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g data-name="hamburger menu"><path d="M21 15H11a1 1 0 000 2h10a1 1 0 000-2zM21 19H11a1 1 0 000 2h10a1 1 0 000-2zM11 13h10a1 1 0 000-2H11a1 1 0 000 2z"></path></g></svg>
    )
}
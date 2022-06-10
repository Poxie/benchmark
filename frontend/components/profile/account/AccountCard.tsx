import React from 'react';
import styles from '../../../styles/Account.module.scss';

export const AccountCard: React.FC<{
    header: string;
    description?: string;
    children: any;
}> = ({ header, description, children }) => {
    return(
        <div className={styles['card']}>
            <div className={styles['card-header']}>
                <h2>
                    {header}
                </h2>
                <span>
                    {description}
                </span>
            </div>

            <div className={styles['card-content']}>
                {children}
            </div>
        </div>
    )
}
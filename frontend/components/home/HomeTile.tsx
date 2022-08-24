import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Home.module.scss';

export const HomeTile: React.FC<{
    title: string;
    description: string;
    media: any;
}> = ({ title, description, media }) => {
    const [isHidden, setIsHidden] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

    // Checking if content is within threshold within viewport
    useEffect(() => {
        const scroll = () => {
            if(!ref.current) return;
            const fromTop = ref.current.getBoundingClientRect().top;
            const percent = fromTop / window.innerHeight;
            
            if(percent < .8) {
                setIsHidden(false);
            }
        }
        scroll();

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);

    const className = [
        styles['tile'],
        isHidden ? styles['hidden'] : ''
    ].join(' ');
    return(
        <div className={className}>
            <div className={styles['tile-content']} ref={ref}>
                <div className={styles['tile-text']}>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>
                <div className={styles['tile-media']}>
                    {media}
                </div>
            </div>
        </div>
    )
}
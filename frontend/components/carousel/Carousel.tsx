import React, { RefObject, useEffect, useRef, useState } from 'react';
import styles from '../../styles/Carousel.module.scss';
import { FunctionComponent } from 'react';
import { ArrowCircleIcon } from '../../icons/ArrowCircleIcon';
import { useCallback } from 'react';
import { useDeviceType } from '../../hooks/useDeviceType';

export const Carousel: React.FC<{
    items: any[];
    renderItem: FunctionComponent<any>;
    itemGap?: number;
    delay?: number;
}> = ({ items: _items, renderItem: RenderItem, itemGap, delay=3000 }) => {
    const gap = itemGap || 15;
    const container = useRef<HTMLDivElement>(null);
    const [controllsDisabled, setControllsDisabled] = useState(false)
    const [items, setItems] = useState(_items);
    const [index, setIndex] = useState(0);
    const interval = useRef<any>();
    const refs = useRef<RefObject<HTMLDivElement>[]>([]);
    const itemWidth = useRef(0);
    const device = useDeviceType();

    // Making sure it doesn't auto slide at same time as user
    const handleClick = useCallback((direction: 'right' | 'left') => {
        setControllsDisabled(true);
        if(direction === 'right') {
            right();
        } else {
            left();
        }

        setTimeout(() => setControllsDisabled(false), 600);
    }, []);

    // Defining item width
    useEffect(() => {
        if(!refs.current) return;
        itemWidth.current = refs.current[0].current?.getBoundingClientRect().width || 0;
    }, []);

    // Function to go right
    const right = () => {
        setIndex(prev => {
            if(!container.current) return prev;
            let newIndex = prev + 1;

            if(newIndex >= 2) {
                setItems(prev => {
                    const newItems = [...prev];
                    newItems.push(prev.shift());
                    return newItems;
                })
                container.current.style.transition = 'none';
                container.current.style.transform = `translate3d(-${itemWidth.current * (newIndex - 2) + gap * (newIndex - 2)}px, 0, 0)`;
                newIndex = prev;

                setTimeout(() => {
                    if(!container.current) return;
                    container.current.style.transition = '.5s transform';

                    setTimeout(() => {
                        if(!container.current) return;
                        container.current.style.transform = `translate3d(-${itemWidth.current * newIndex + gap * newIndex}px,0,0)`;
                    }, 50);
                }, 10);
            } else {
                container.current.style.transform = `translate3d(-${itemWidth.current * newIndex + gap * newIndex}px, 0, 0)`;
            }

            return newIndex;
        })
    }
    // Function to go left
    const left = () => {
        setIndex(prev => {
            if(!container.current) return prev;

            let newIndex = prev - 1;
            if(newIndex < 2) {
                setItems(prev => {
                    const newItems = [...prev];
                    newItems.unshift(newItems.pop());
                    return newItems;
                })
                container.current.style.transition = 'none';
                container.current.style.transform = `translate3d(-${itemWidth.current * (newIndex + 2) + gap * (newIndex + 2)}px, 0, 0)`;
                newIndex = prev;

                setTimeout(() => {
                    if(!container.current) return;
                    container.current.style.transition = '.5s transform';
                    
                    setTimeout(() => {
                        if(!container.current) return;
                        container.current.style.transform = `translate3d(-${itemWidth.current * newIndex + gap * newIndex}px, 0, 0)`;
                    }, 50);
                }, 10)
            } else {
                container.current.style.transform = `translate3d(-${itemWidth.current * newIndex + gap * newIndex}px, 0, 0)`;
            }

            return newIndex;
        })
    };

    // Start auto-sliding on mount
    useEffect(() => {
        if(!container.current) return;

        if(device === 'mobile') {
            container.current.style.transform = `translate3d(0,0,0)`;
            return;
        };
        
        interval.current = setInterval(right, delay);
        return () => clearInterval(interval.current);
    }, [controllsDisabled, device]);

    return(
        <div 
            className={styles['container']}
            style={{
                overflowX: device !== 'mobile' ? 'hidden' : 'auto'
            }}
        >
            <div 
                className={styles['container-content']}
                style={{ gap }}
                ref={container}
            >
                {items.map((item, key) => {
                    const ref = React.createRef<HTMLDivElement>();
                    refs.current.push(ref);
                    return(
                        <div className={styles['item']} key={key} ref={ref}>
                            <RenderItem {...item} key={key} />
                        </div>
                    )
                })}
            </div>
            
            {device !== 'mobile' && (
                <div className={styles['carousel-controlls']}>
                    <div onClick={!controllsDisabled ? () => handleClick('left') : undefined}>
                        <ArrowCircleIcon />
                    </div>
                    <div onClick={!controllsDisabled ? () => handleClick('right') : undefined}>
                        <ArrowCircleIcon />
                    </div>
                </div>
            )}
        </div>
    )
}
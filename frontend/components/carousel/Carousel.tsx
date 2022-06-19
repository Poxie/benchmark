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
    const [shouldTransform, setShouldTransform] = useState(true);
    const [controllsDisabled, setControllsDisabled] = useState(false)
    const [items, setItems] = useState(_items);
    const [index, setIndex] = useState(0);
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

    const updateTransform = (index: number) => {
        const iWidth = itemWidth.current;
        setTimeout(() => {
            if(!container.current) return;

            container.current.style.transition = '.5s transform';
            container.current.style.transform = `translate3d(-${index * iWidth + index * gap}px, 0, 0)`;
        }, 20);
    }
    const right = () => {
        const iWidth = itemWidth.current;
        setIndex(prev => {
            if(!container.current) return prev;
            let newIndex = prev + 1;

            if(newIndex >= 2) {
                setItems(prev => {
                    const newItems = [...prev];
                    newItems.push(newItems.shift());
                    return newItems;
                })

                container.current.style.transition = 'none';
                container.current.style.transform = `translate3d(-${(prev - 1) * iWidth + (prev - 1) * gap}px, 0, 0)`;
                newIndex = prev;
            }
            updateTransform(newIndex);

            return newIndex;
        })
    }
    const left = () => {
        const iWidth = itemWidth.current;
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
                container.current.style.transform = `translate3d(-${(prev + 1) * iWidth + (prev + 1) * gap}px, 0, 0)`;
                newIndex = prev;
            }
            updateTransform(newIndex);

            return newIndex;
        })
    }
    
    // On mount, start auto-sliding
    useEffect(() => {
        if(!container.current) return;
        if(device === 'mobile' || !shouldTransform) {
            container.current.style.transform = `translate3d(0,0,0)`;
            return;
        }
        
        const interval = setInterval(right, delay);
        return () => clearInterval(interval);
    }, [controllsDisabled, shouldTransform, device]);

    // If carousel is fully visible, stop animating
    useEffect(() => {
        const resize = () => {
            const allItemWidth = items.length * itemWidth.current + gap * items.length;
            setShouldTransform(!(allItemWidth < window.innerWidth));
        }
        resize();

        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [itemWidth.current]);

    // Defining item width
    useEffect(() => {
        if(!refs.current) return;
        itemWidth.current = refs.current[0].current?.getBoundingClientRect().width || 0;
    }, []);

    return(
        <div 
            className={styles['container']}
            style={{
                overflowX: device !== 'mobile' ? 'hidden' : 'auto'
            }}
        >
            <div 
                className={styles['container-content']}
                style={{ gap, justifyContent: shouldTransform ? 'unset' : 'center' }}
                ref={container}
            >
                {items.map((item, key) => {
                    const ref = React.createRef<HTMLDivElement>();
                    refs.current.push(ref);
                    return(
                        <div key={key} ref={ref}>
                            <RenderItem {...item} />
                        </div>
                    )
                })}
            </div>
            
            {device !== 'mobile' && shouldTransform && (
                <div className={styles['carousel-controlls']}>
                    <button onClick={!controllsDisabled ? () => handleClick('left') : undefined}>
                        <ArrowCircleIcon />
                    </button>
                    <button onClick={!controllsDisabled ? () => handleClick('right') : undefined}>
                        <ArrowCircleIcon />
                    </button>
                </div>
            )}
        </div>
    )
}
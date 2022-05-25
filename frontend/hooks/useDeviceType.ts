import { useEffect, useState } from "react"

const getDeviceType = () => {
    // If is server side rendered
    if(typeof window === 'undefined') return 'computer';

    const width = document.body.offsetWidth;
    if(width < 500) return 'mobile';
    if(width < 800) return 'tablet';
    return 'computer';
}
export const useDeviceType: () => ReturnType<typeof getDeviceType> = () => {
    const [deviceType, setDeviceType] = useState(getDeviceType());

    // Adding event listener to update device type on resize
    useEffect(() => {
        const updateDeviceType = () => {
            setDeviceType(getDeviceType());
        }

        window.addEventListener('resize', updateDeviceType);
        return () => window.removeEventListener('resize', updateDeviceType);
    }, []);

    return deviceType as ReturnType<typeof getDeviceType>;
}
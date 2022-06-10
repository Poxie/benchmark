import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Index() {
    const router = useRouter();
    const { username } = router.query;
    
    useEffect(() => {
        if(!username) return;
        router.replace(`/profile/${username}/overview`);
    }, [username]);

    return null;
}
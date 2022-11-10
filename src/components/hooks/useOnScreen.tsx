import React, {useEffect, useState} from 'react';


export function useOnScreen(reference: any) {
    const [isOnScreen, setIsOnScreen] = useState(false)
    const observer = new IntersectionObserver((([entry]) => {
        setIsOnScreen(entry.isIntersecting)
    }), {threshold: 0.2})
    useEffect(() => {
        observer.observe(reference.current)
        return () => observer.disconnect()
    })
    return isOnScreen;
}


import { useState, useEffect } from "react";

function LoadingDots() {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev === '...' ? '' : prev + '.'));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return <>{dots}</>;
}

export default LoadingDots;

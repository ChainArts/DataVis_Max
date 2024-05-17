import { useState, useEffect } from 'react';

const useMousePos = () => {
    const [mousePos, setMousePos] = useState({x: 0, y: 0});

    useEffect(() => {
        const updateMousePos = (e :MouseEvent) => {
            setMousePos({x: e.clientX, y: e.clientY});
        }
        window.addEventListener('mousemove', updateMousePos);
        return () => window.removeEventListener('mousemove', updateMousePos);
    }, []);

    return mousePos;
}

export default useMousePos;
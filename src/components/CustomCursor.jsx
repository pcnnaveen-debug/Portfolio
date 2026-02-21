import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('hover-target')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-200 ease-out"
                style={{
                    transform: `translate3d(${mousePosition.x - 6}px, ${mousePosition.y - 6}px, 0) scale(${isHovering ? 3 : 1})`,
                    opacity: isHovering ? 0.5 : 1
                }}
            />
            <div
                className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[99] transition-transform duration-300 ease-out"
                style={{
                    transform: `translate3d(${mousePosition.x - 16}px, ${mousePosition.y - 16}px, 0) scale(${isHovering ? 1.5 : 1})`,
                    opacity: isHovering ? 0 : 1
                }}
            />
        </>
    );
}

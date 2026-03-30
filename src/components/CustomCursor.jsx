import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Spring animations for the outline to create that magnetic lag
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(0, springConfig);
    const springY = useSpring(0, springConfig);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            springX.set(e.clientX);
            springY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.classList.contains('cursor-pointer') ||
                target.closest('a') ||
                target.closest('button')
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
    }, [springX, springY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Main Circle Outline - Magnetic Lag */}
            <motion.div
                className="fixed top-0 left-0 h-12 w-12 border-2 rounded-full"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    borderColor: 'rgba(255, 180, 0, 0.4)',
                }}
                animate={{
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? 'rgba(255, 180, 0, 0.2)' : 'transparent',
                    borderColor: isHovering ? 'rgba(255, 180, 0, 0.8)' : 'rgba(255, 180, 0, 0.4)',
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
            {/* Center Dot - 1:1 movement */}
            <motion.div
                className="fixed top-0 left-0 h-1.5 w-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(255,180,0,0.8)]"
                style={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    opacity: isHovering ? 0 : 1,
                    scale: isHovering ? 0 : 1,
                }}
            />
        </div>
    );
}

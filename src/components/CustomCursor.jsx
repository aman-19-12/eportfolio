import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    // Track exact mouse position continuously
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Apply slightly lagged dynamic spring physics mapped to mouse coordinates
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        // Attach global events dynamically parsing interactive elements via data-cursor-interactive
        const handleMouseOver = (e) => {
            if (e.target.closest('[data-cursor-interactive="true"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%'
            }}
            animate={{
                width: isHovering ? 80 : 20,
                height: isHovering ? 80 : 20,
                backgroundColor: isHovering ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            <motion.span
                className="font-mono text-[8px] tracking-widest uppercase text-white font-bold"
                animate={{
                    opacity: isHovering ? 1 : 0,
                    scale: isHovering ? 1 : 0
                }}
            >
                View
            </motion.span>
        </motion.div>
    );
};

export default CustomCursor;

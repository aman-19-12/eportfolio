import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const BentoCard = ({
    className,
    children,
    delay = 0,
    duration = 3,
    yOffset = [0, -10, 0],
    zIndex = 10,
    style,
    layoutId,
    onClick
}) => {
    const cardRef = useRef(null);

    // Motion values to track normalized mouse position relative to the card's center
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Apply snappy premium spring properties to the x,y transition
    const springConfig = { stiffness: 300, damping: 20 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Map the spring values (-0.5 to 0.5) to actual physical pixel shifts for parallax
    const childX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
    const childY = useTransform(springY, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();

        // Normalized boundaries: left/top is -0.5, right/bottom is 0.5
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        x.set((mouseX / rect.width) - 0.5);
        y.set((mouseY / rect.height) - 0.5);
    };

    const handleMouseLeave = () => {
        // Snap inner layers back to default on leave
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            layoutId={layoutId} // For seamless shared layout transitions
            onClick={onClick}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-[2rem] border border-t-white/40 border-l-white/20 border-r-white/5 border-b-white/5 bg-gradient-to-br from-[rgba(var(--accent-color),0.05)] to-transparent backdrop-blur-lg overflow-hidden flex flex-col drop-shadow-[0_0_15px_rgba(var(--accent-color),0.5)] ${className}`}
            style={{ zIndex, ...style }}
            data-cursor-interactive="true"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: yOffset }}
            whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                boxShadow: '0 0 30px rgba(var(--accent-color), 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
                layout: { type: "spring", stiffness: 300, damping: 20 },
                opacity: { duration: 0.8, ease: "easeOut", delay: delay * 0.5 },
                scale: springConfig,
                boxShadow: springConfig,
                y: {
                    duration: duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: delay,
                }
            }}
        >
            <motion.div
                className="p-6 md:p-8 h-full flex flex-col relative z-10 w-full flex-grow"
                style={{ x: childX, y: childY }}
            >
                {children}
            </motion.div>

            {/* Decorative inner glow for glassmorphism pop */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 z-0 pointer-events-none rounded-[2rem]"></div>
        </motion.div>
    );
};

export default BentoCard;

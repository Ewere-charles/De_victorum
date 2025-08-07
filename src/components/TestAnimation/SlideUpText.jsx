import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function SlideUpText({ 
    children, 
    className = "", 
    delay = 0, 
    threshold = 0.3,
    rootMargin = "0px",
    springConfig = {
        type: "spring",
        damping: 25,
        stiffness: 120,
        mass: 1
    }
}) {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    
                    // Apply delay before starting animation
                    if (delay > 0) {
                        setTimeout(() => {
                            setShouldAnimate(true);
                        }, delay);
                    } else {
                        setShouldAnimate(true);
                    }
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, [threshold, rootMargin, delay]);

    return (
        <div ref={textRef} className="overflow-hidden">
            <motion.div 
                className={className}
                initial={{ y: "100%" }}
                animate={{ 
                    y: shouldAnimate ? "0%" : "100%"
                }}
                transition={{
                    ...springConfig,
                    // No additional delay here since we handle it with setTimeout
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default SlideUpText;
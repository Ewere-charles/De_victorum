import { motion, AnimatePresence } from 'framer-motion';

const PageTransitionLeft = (OgComponent) => (props) => {
    return (
        <AnimatePresence mode="wait">
            {/* Page Content */}
            <motion.div
                key="page-content"
                initial={{ 
                    opacity: 0, 
                    scale: 0.98,
                    filter: "blur(4px)"
                }}
                animate={{ 
                    opacity: 1, 
                    scale: 1,
                    filter: "blur(0px)"
                }}
                exit={{ 
                    opacity: 0,
                    scale: 1.02,
                    filter: "blur(4px)"
                }}
                transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.8
                }}
            >
                <OgComponent {...props} />
            </motion.div>
            
            {/* Base Background Layer - Always Present */}
            <motion.div
                key="base-bg"
                initial={{ opacity: 1 }}
                animate={{ 
                    opacity: 0
                }}
                exit={{ 
                    opacity: 1
                }}
                transition={{
                    duration: 0.1,
                    ease: "linear"
                }}
                className="fixed inset-0 bg-gunmetal-700 z-60 pointer-events-none"
            />

            {/* Primary Curtain - Left to Right Sweep */}
            <motion.div
                key="curtain-1"
                initial={{ 
                    x: "-100%"
                }}
                animate={{ 
                    x: "-100%"
                }}
                exit={{ 
                    x: ["-100%", "0%", "100%"]
                }}
                transition={{
                    duration: 1.4,
                    ease: [0.76, 0, 0.24, 1],
                    times: [0, 0.5, 1]
                }}
                className="fixed inset-0 bg-gradient-to-br from-gunmetal-600 via-gunmetal-700 to-gunmetal-800 z-59 pointer-events-none"
            />

            {/* Secondary Curtain - Delayed Sweep */}
            <motion.div
                key="curtain-2"
                initial={{ 
                    x: "-100%"
                }}
                animate={{ 
                    x: ["-100%", "0%", "-100%"]
                }}
                exit={{ 
                    x: "-100%"
                }}
                transition={{
                    duration: 1.6,
                    delay: 0.2,
                    ease: [0.76, 0, 0.24, 1],
                    times: [0, 0.6, 1]
                }}
                className="fixed inset-0 bg-gradient-to-bl from-gunmetal-500 via-gunmetal-700 to-gunmetal-600 z-58 pointer-events-none"
            />

            {/* Organic Shape Overlay */}
            <motion.div
                key="organic-shape"
                initial={{
                    clipPath: "circle(0% at 0% 50%)"
                }}
                animate={{
                    clipPath: [
                        "circle(0% at 0% 50%)",
                        "circle(80% at 50% 50%)",
                        "circle(0% at 100% 50%)"
                    ]
                }}
                exit={{
                    clipPath: "circle(150% at 50% 50%)"
                }}
                transition={{
                    duration: 1.8,
                    delay: 0.1,
                    ease: [0.85, 0, 0.15, 1],
                    times: [0, 0.6, 1]
                }}
                className="fixed inset-0 bg-gradient-to-r from-gunmetal-800/50 via-gunmetal-600/30 to-gunmetal-700/40 z-57 pointer-events-none"
            />

            {/* Liquid Morphing Element */}
            <motion.div
                key="liquid-morph"
                initial={{ 
                    scale: 0,
                    opacity: 0,
                    rotate: 0,
                    borderRadius: "50%"
                }}
                animate={{ 
                    scale: [0, 1.2, 0],
                    opacity: [0, 0.8, 0],
                    rotate: [0, 180, 360],
                    borderRadius: ["50%", "30%", "50%"]
                }}
                exit={{
                    scale: [0, 1.5, 2.5],
                    opacity: [0, 0.6, 0],
                    rotate: [0, -90, -180],
                    borderRadius: ["50%", "20%", "0%"]
                }}
                transition={{
                    duration: 2,
                    ease: [0.68, -0.55, 0.265, 1.55],
                    times: [0, 0.5, 1]
                }}
                className="fixed top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gunmetal-500/80 to-gunmetal-700/80 z-56 pointer-events-none"
                style={{
                    filter: "blur(2px)",
                    backdropFilter: "blur(4px)"
                }}
            />

            {/* Elegant Particle System */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: `${20 + i * 10}%`,
                        y: `${30 + i * 8}%`
                    }}
                    animate={{
                        opacity: [0, 0.4, 0],
                        scale: [0, 1, 0],
                        x: `${20 + i * 10 + Math.sin(i) * 20}%`,
                        y: `${30 + i * 8 + Math.cos(i) * 15}%`,
                        rotate: [0, 180, 360]
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0
                    }}
                    transition={{
                        duration: 1.8,
                        delay: i * 0.1,
                        ease: "easeInOut",
                        repeat: 1,
                        repeatType: "mirror"
                    }}
                    className="fixed w-3 h-3 bg-gunmetal-300/20 rounded-full z-55 pointer-events-none"
                    style={{
                        filter: "blur(1px)"
                    }}
                />
            ))}

            {/* Premium Loading Interface */}
            <motion.div
                key="loading-ui"
                initial={{ opacity: 1 }}
                animate={{ 
                    opacity: 0
                }}
                exit={{ 
                    opacity: 1
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.6
                }}
                className="fixed inset-0 flex flex-col items-center justify-center z-61 pointer-events-none"
            >
                {/* Animated Brand Mark */}
                <motion.div
                    initial={{ 
                        scale: 0,
                        rotate: -90,
                        opacity: 0
                    }}
                    animate={{ 
                        scale: [0, 1.1, 1],
                        rotate: [0, 10, 0],
                        opacity: 1
                    }}
                    exit={{
                        scale: 0,
                        rotate: 90,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1,
                        ease: [0.68, -0.55, 0.265, 1.55]
                    }}
                    className="w-20 h-20 mb-8 rounded-3xl bg-gradient-to-br from-gunmetal-600/20 to-gunmetal-700/10 backdrop-blur-md border border-gunmetal-400/20 flex items-center justify-center shadow-2xl"
                >
                    <div className="w-10 h-10 bg-gradient-to-br from-gunmetal-200/80 to-gunmetal-300/60 rounded-xl shadow-lg" />
                </motion.div>

                {/* Smooth Progress Indicator */}
                <div className="w-56 h-1 bg-gunmetal-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                        initial={{ width: "0%", opacity: 0 }}
                        animate={{ 
                            width: "100%", 
                            opacity: 1
                        }}
                        transition={{
                            width: {
                                duration: 1.2,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            },
                            opacity: {
                                duration: 0.3
                            }
                        }}
                        className="h-full bg-gradient-to-r from-gunmetal-300/40 via-gunmetal-200/70 to-gunmetal-300/40 rounded-full shadow-lg"
                    />
                </div>

                {/* Refined Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                        opacity: 1, 
                        y: 0
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3
                    }}
                    className="text-gunmetal-200/70 text-xs font-light tracking-[0.2em] mt-6 uppercase"
                >
                    Loading
                </motion.div>
            </motion.div>

            {/* Subtle Ambient Atmosphere */}
            <motion.div
                key="ambient"
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: [0, 0.2, 0]
                }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 2,
                    ease: "easeInOut"
                }}
                className="fixed inset-0 z-54 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(circle at 25% 75%, rgba(var(--gunmetal-600), 0.15) 0%, transparent 60%),
                        radial-gradient(circle at 75% 25%, rgba(var(--gunmetal-500), 0.10) 0%, transparent 60%)
                    `
                }}
            />
        </AnimatePresence>
    );
};

export default PageTransitionLeft;
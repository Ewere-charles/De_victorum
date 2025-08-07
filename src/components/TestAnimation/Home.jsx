import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import PageTransition from './transition/PageTransition1';

const AnimatedTextSection = ({ text, index }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [isActive, setIsActive] = useState(false);
  const isInView = useInView(ref, { amount: 0.5, margin: "0px 0px -50% 0px" });

  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.03,
        delayChildren: 0.2,
        ease: [0.16, 0.77, 0.47, 0.97],
        duration: 1.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.02,
        staggerDirection: -1,
        ease: [0.65, 0, 0.35, 1],
        duration: 0.8
      }
    }
  };

  const letter = {
    hidden: { 
      opacity: 0, 
      y: "150%",
      rotateX: -60,
      filter: "blur(8px)",
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: "0%",
      rotateX: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        ease: [0.22, 1, 0.36, 1],
        duration: 1.2,
        bounce: 0.3
      }
    },
    exit: {
      opacity: 0,
      y: "-100%",
      rotateX: 60,
      filter: "blur(8px)",
      scale: 0.8,
      transition: {
        ease: [0.22, 1, 0.36, 1],
        duration: 0.8
      }
    }
  };

  useEffect(() => {
    if (isInView && !isActive) {
      controls.start("visible");
      setIsActive(true);
    } else if (!isInView && isActive) {
      controls.start("exit").then(() => controls.set("hidden"));
      setIsActive(false);
    }
  }, [isInView, controls, isActive]);

  return (
    <div 
      className="w-full h-screen relative overflow-hidden snap-start will-change-transform"
      style={{ 
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        viewTimelineName: `--section${index}`,
        viewTimelineAxis: 'block'
      }}
    >
      {/* Enhanced Parallax Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden will-change-transform">
        <img 
          src="https://img.freepik.com/free-vector/realistic-polygonal-background_23-2148930553.jpg" 
          className="w-full h-full object-cover scale-110"
          style={{ 
            animation: 'parallax_linear linear forwards',
            animationTimeline: `--section${index}`,
            animationRange: 'entry 25% exit 75%',
            transformOrigin: 'center center'
          }}
          alt="Parallax background"
        />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
      </div>
      
      {/* Animated Text with Depth */}
      <motion.div
        ref={ref}
        className="h-full w-full flex items-end justify-start pl-16 relative"
        initial="hidden"
        animate={controls}
        variants={container}
      >
        <div className="flex flex-wrap mix-blend-exclusion" style={{ 
          paddingBottom: '2rem',
          marginBottom: '-2rem',
        }}>
          {text.split('').map((char, i) => (
            <motion.span
              key={i}
              className="text-[200px] leading-[0.8] font-bold text-white tracking-wider font-mono drop-shadow-lg"
              variants={letter}
              style={{ 
                display: 'inline-block',
                lineHeight: '0.8',
                willChange: 'transform, opacity, filter'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Home = () => {
  const sections = [
    { text: 'CHARLES' },
    { text: 'TESTIMONY' },
    { text: 'NELSON' },
    { text: 'EMMANUEL' },
    { text: 'VICTORY' }
  ];

  return (
    <>
      {/* Enhanced CSS for parallax */}
      <style jsx global>{`
        @keyframes parallax_linear {
          from { 
            transform: translateY(0%) scale(1.1); 
          }
          to { 
            transform: translateY(-15%) scale(1); 
          }
        }
        
        /* Modern view-timeline check */
        @supports not (view-timeline-name: test) {
          [style*="view-timeline-name"] img {
            animation: none !important;
            transform: translateY(0%) scale(1.1) !important;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      {/* Main container with perspective */}
      <div className="snap-y snap-mandatory h-screen w-full overflow-y-scroll scroll-smooth sepia-[.15] contrast-[1.2] [font-family:Halisa_VF] tracking-tighter relative">
        {sections.map((section, i) => (
          <AnimatedTextSection
            key={i}
            text={section.text}
            index={i+1}
          />
        ))}
      </div>
    </>
  );
};

export default PageTransition(Home);
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronsRight, MoveLeft } from 'lucide-react';
import { motion } from 'framer-motion';

// Navigation Component
export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine current page based on route
  const getCurrentPage = () => {
    if (location.pathname === '/signin' || location.pathname === '/sign-in') {
      return 'Sign In';
    }
    return 'Sign Up';
  };

  const [page, setPage] = useState(getCurrentPage());

  // Handle page toggle
  const handlePageToggle = () => {
    const newPage = page === 'Sign Up' ? 'Sign In' : 'Sign Up';
    setPage(newPage);
  };

  // Handle main action (navigate to current page or submit)
  const handleMainAction = () => {
    if (page === 'Sign Up') {
      navigate('/signup');
    } else {
      navigate('/signin');
    }
  };

  return (
    <nav className="fixed bottom-5 left-0 right-0 h-[100px] z-10 flex items-center justify-center gap-4">
      {/* Back/Toggle Button */}
      <motion.div 
        className="border-2 border-light-700 text-white min-h-[50px] min-w-[50px] rounded-full flex items-center justify-center cursor-pointer bg-gunmetal-600/50 hover:bg-gunmetal-500/60 transition-colors"
        onClick={handlePageToggle}
        whileHover={{ 
          scale: 1.05,
          backgroundColor: "rgba(var(--gunmetal-500), 0.6)"
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25
        }}
      >
        <motion.div
          whileHover={{ x: -2 }}
          whileTap={{ x: -4 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        >
          <MoveLeft size={20} />
        </motion.div>
      </motion.div>

      {/* Main Action Button */}
      <motion.div 
        className="flex justify-between items-center bg-gunmetal-600/50 hover:bg-gunmetal-500/60 transition-colors rounded-full min-h-[50px] text-white font-bold text-lg p-4 pl-8 gap-4 cursor-pointer"
        onClick={handleMainAction}
        whileHover={{ 
          scale: 1.02,
          x: 2
        }}
        whileTap={{ 
          scale: 0.98,
          x: 0,
          transition: { duration: 0.1 }
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
      >
        <motion.span
          key={page} // Key prop to trigger animation on text change
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
        >
          {page}
        </motion.span>
        
        <motion.span
          whileHover={{ 
            x: 3,
            transition: {
              type: "spring",
              stiffness: 500,
              damping: 20,
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.6
            }
          }}
          whileTap={{ x: 6 }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ 
              rotate: [0, -5, 5, 0],
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            }}
          >
            <ChevronsRight size={20} className="text-light-200" />
          </motion.div>
        </motion.span>
      </motion.div>
    </nav>
  );
}
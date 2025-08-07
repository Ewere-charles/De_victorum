import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Check } from 'lucide-react';

const AnimatedSaveButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulate save operation
    setTimeout(() => {
      setIsLoading(false);
      setIsSaved(true);
      
      // Reset after 2 seconds
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
        
        {/* Hollow Save Button */}
        <motion.button
          onClick={handleSave}
          disabled={isLoading}
          className={`
            relative w-full flex items-center justify-center overflow-hidden px-8 py-3 rounded-[3px] font-semibold border-2 transition-all duration-300 transform
            ${isSaved 
              ? 'border-green-500 bg-green-500 text-white' 
              : isLoading 
                ? 'border-blue-400 text-blue-400 cursor-not-allowed' 
                : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white active:scale-95'
            }
          `}
          whileHover={!isLoading && !isSaved ? { scale: 1.001 } : {}}
          whileTap={!isLoading && !isSaved ? { scale: 0.95 } : {}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Loading spinner */}
          {isLoading && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          )}

          {/* Success checkmark */}
          {isSaved && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Check className="w-5 h-5 text-white" />
            </motion.div>
          )}

          {/* Default content */}
          <motion.div
            className="flex items-center space-x-2"
            animate={{ 
              opacity: isLoading || isSaved ? 0 : 1,
              scale: isLoading || isSaved ? 0.8 : 1 
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.3 }}
            >
              <Save className="w-5 h-5" />
            </motion.div>
            <span>Save</span>
          </motion.div>
        </motion.button>

        {/* Status indicator */}
        <motion.div 
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {isLoading && (
            <motion.p 
              className="text-blue-500 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Saving...
            </motion.p>
          )}
          {isSaved && (
            <motion.p 
              className="text-green-500 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Saved successfully!
            </motion.p>
          )}
        </motion.div>
    </div>
  );
};

export default AnimatedSaveButton;
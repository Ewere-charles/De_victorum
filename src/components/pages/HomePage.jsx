import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CardTransition from '../TestAnimation/transition/CardTransition';
import Clock from '../../assets/mobile/3D_clock.png';
import Doc from '../../assets/mobile/Doc.png';
import ppt from '../../assets/mobile/ppt.png';
import message from '../../assets/mobile/message.png';
import research from '../../assets/mobile/research.png';
import user from '../../assets/mobile/user1.png';

const HomePage = () => {
  const navigate = useNavigate();

  const storageItems = [
    {
      id: 1,
      title: 'Set your profile',
      color: 'bg-gunmetal-600',
      accent: 'bg-red-400',
      route: '/profile'
    },
    {
      id: 2,
      title: 'Chat coordinator',
      color: 'bg-gunmetal-600',
      accent: 'bg-red-500',
      route: '/chat'
    },
    {
      id: 3,
      title: 'Seminar Report',
      color: 'bg-blue-400',
      accent: 'bg-orange-300',
      route: '/seminar-report'
    },
    {
      id: 4,
      title: 'Seminar synopsis',
      color: 'bg-slate-400',
      accent: 'bg-orange-400',
      route: '/seminar-synopsis'
    },
    {
      id: 5,
      title: 'Seminar slide',
      color: 'bg-blue-500',
      accent: 'bg-orange-300',
      route: '/seminar-slide'
    },
    {
      id: 6,
      title: 'Others Research',
      color: 'bg-gunmetal-500',
      accent: 'bg-green-400',
      route: '/research'
    }
  ];

  const handleCardClick = (route) => {
    // Animation before navigation
    document.getElementById(`card-${route.split('/').pop()}`).style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      navigate(route);
    }, 150); // Matches the tap animation duration
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.15 }
    }
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="h-screen w-full max-w-[1100px] mx-auto bg-light-100/20">
      <motion.div 
        className="h-full w-full flex flex-col"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Header Section */}
        <motion.div 
          className="bg-white p-6 md:mt-6 md:rounded-xl relative overflow-hidden"
          variants={fadeInUp}
        >
          <div className="flex justify-between items-start">
            <div>
              <motion.h2 
                className="text-2xl md:text-3xl inter-bold font-bold text-slate-dark-900 mb-2"
                variants={item}
              >
                Seminar Report
              </motion.h2>
              <motion.p 
                className="text-slate-dark-600 inter-semibold text-sm md:text-lg leading-relaxed mb-4"
                variants={item}
              >
                Submit your seminar report deadline<br />
                for submison is 12am on 8th August 2025
              </motion.p>
              <motion.button 
                className="bg-gunmetal-700 text-white px-6 py-3 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={item}
                onClick={() => handleCardClick('/profile')}
              >
                Complete your profile
              </motion.button>
            </div>
            
            <motion.div 
              className="w-24 h-24 md:w-48 md:h-48"
              variants={item}
            >
              <img src={Clock} alt="deadline clock" className="w-full h-full" />
            </motion.div>
          </div>
        </motion.div>

        {/* User Greeting */}
        <div className="flex items-center justify-center px-4 md:px-0 mt-4">
          <motion.div 
            className="bg-white p-4 flex items-center space-x-3 rounded-lg w-full"
            variants={fadeInUp}
          >
            <div className="w-10 h-10 md:w-24 md:h-24 bg-gunmetal-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-orange-300 rounded-full"></div>
            </div>
            <div>
              <motion.p 
                className="text-slate-dark-600 text-sm md:text-lg"
                variants={item}
              >
                Hello, Kevin
              </motion.p>
              <motion.p 
                className="text-slate-dark-900 font-semibold md:text-xl"
                variants={item}
              >
                Keep document save
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Storage Items Grid */}
        <motion.div 
          className="flex-1 p-4 grid grid-cols-2 md:grid-cols-5 gap-4 overflow-y-auto"
          variants={container}
        >
          {storageItems.map((storageItem, index) => (
            <motion.div
              key={storageItem.id}
              id={`card-${storageItem.route.split('/').pop()}`}
              className="bg-light-50 rounded-2xl p-4 border border-light-200 relative overflow-hidden min-h-[150px] cursor-pointer"
              variants={item}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap="tap"
              onClick={() => handleCardClick(storageItem.route)}
              custom={index}
            >
              <div className="mb-3">
                <h3 className="font-semibold text-slate-dark-900 text-sm mb-1">
                  {storageItem.title}
                </h3>
                <p className="text-slate-dark-500 text-xs">{storageItem.size}</p>
              </div>
              
              {/* Icons */}
              <div className="flex justify-center mb-5">
                {index === 0 && (
                  <div className="absolute w-[50%] bottom-[15px]">
                    <img src={user} alt="User profile" className='w-full' />
                  </div>
                )}
                
                {index === 1 && (
                  <div className="absolute w-[60%] bottom-[2px]">
                    <img src={message} alt="Chat" className='w-full' />
                  </div>
                )}
                
                {index === 2 && (
                  <div className="absolute w-[45%] bottom-[15px]">
                    <img src={Doc} alt="Document" className='w-full' />
                  </div>
                )}
                
                {index === 3 && (
                  <div className="absolute w-[45%] bottom-[15px]">
                    <img src={Doc} alt="Synopsis" className='w-full' />
                  </div>
                )}
                
                {index === 4 && (
                  <div className="absolute w-[45%] bottom-[15px]">
                    <img src={ppt} alt="Slide" className='w-full' />
                  </div>
                )}
                
                {index === 5 && (
                  <div className="absolute w-[60%] bottom-[5px]">
                    <img src={research} alt="Research" className='w-full' />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardTransition(HomePage);
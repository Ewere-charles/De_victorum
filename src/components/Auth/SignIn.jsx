import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransitionLeft from '../TestAnimation/transition/PageTransitionLeft.jsx';
import desktop_bg from '../../assets/desktop/desktop_bg.png';
import mobile_bg from '../../assets/mobile/mb_bg.png';
import { ToastContainer } from '../UI/Toast/Toast';
import { useToast } from '../UI/Toast/UseToast';

function SignIn() {
    const [email, setEmail] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const { toasts, addToast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation
        if (!email) {
            addToast('Please enter your email', 'error');
            return;
        }
        
        if (!/\S+@\S+\.\S+/.test(email)) {
            addToast('Please enter a valid email address', 'error');
            return;
        }
        
        console.log('Sign in with:', email);
        addToast('Sign in successful!', 'success');
    };

    return (
        <div className="relative min-h-screen w-full bg-gunmetal-700 flex flex-col">
            {/* Toast Container */}
            <ToastContainer toasts={toasts} position="top" />
            
            {/* Background Images - Responsive */}
            <img 
                src={mobile_bg} 
                alt="Mobile Background" 
                className='fixed inset-0 h-full w-full object-cover opacity-20 md:hidden pointer-events-none'
            />
            <img 
                src={desktop_bg} 
                alt="Desktop Background" 
                className='fixed inset-0 h-full w-full object-cover opacity-20 hidden md:block pointer-events-none'
            />

            {/* Header */}
            <motion.div 
                className="relative z-10 flex items-center justify-between p-4 pt-6 md:pt-8 md:px-6 lg:px-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Link to="/" className="flex-shrink-0">
                    <motion.button 
                        className="rounded-full hover:bg-gray-200/50 transition-colors bg-white h-8 w-8 md:h-9 md:w-9 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ChevronLeft size={18} className="text-gunmetal-400" />
                    </motion.button>
                </Link>
                
                <h1 className="text-2xl md:text-3xl inter-thin font-extralight text-light-200 mx-auto">SEMINAR</h1>
                <div className="w-8 md:w-9 flex-shrink-0" /> {/* Spacer for centering */}
            </motion.div>

            {/* Main Content - Centered with flex-grow */}
            <div className="flex-grow flex items-center justify-center px-4 py-4 md:py-8">
                <motion.div 
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8"
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.4,
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                    }}
                >
                    {/* Title */}
                    <motion.h2 
                        className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Sign In
                    </motion.h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Field with Microinteractions */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <div className="relative">
                                <motion.div
                                    className={`absolute w-[35px] h-full flex justify-center items-center left-0 top-0 transform -translate-y-1/2 ${
                                        isFocused ? 'text-blue-500' : 'text-gray-400'
                                    } transition-colors duration-200`}
                                    animate={{
                                        scale: isFocused ? 1.2 : 1
                                    }}
                                    transition={{ type: "spring", stiffness: 500 }}
                                >
                                    <Mail size={18} />
                                </motion.div>
                                <motion.input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    placeholder="your@email.com"
                                    className="w-full text-sm sm:text-base pl-10 pr-3 py-2 border border-slate-dark-500 rounded-[3px] focus:ring-1 focus:ring-slate-dark-800 focus:border-slate-dark-800 outline-none transition-all bg-transparent"
                                    whileFocus={{ 
                                        scale: 1.02,
                                        boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.2)"
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            </div>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="w-full py-3 rounded-lg font-semibold text-white bg-gunmetal-700 hover:bg-gunmetal-800 shadow-md transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)"
                            }}
                            whileTap={{ 
                                scale: 0.98,
                                boxShadow: "0 5px 10px -3px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            Continue with Email
                        </motion.button>
                    </form>

                    {/* Divider */}
                    <motion.div 
                        className="flex items-center my-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                    >
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="px-4 text-gray-500 text-sm">or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </motion.div>

                    {/* Sign Up Link */}
                    <motion.div 
                        className="mt-6 text-center text-gray-600 text-sm sm:text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                    >
                        Don't have an account?{' '}
                        <Link 
                            to="/signup" 
                            className="text-gunmetal-500 hover:text-gunmetal-600 underline transition-colors"
                        >
                            Sign up
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default PageTransitionLeft(SignIn);
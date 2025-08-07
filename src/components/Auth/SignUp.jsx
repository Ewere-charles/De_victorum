import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransitionLeft from '../TestAnimation/transition/PageTransitionLeft.jsx';
import desktop_bg from '../../assets/desktop/desktop_bg.png';
import mobile_bg from '../../assets/mobile/mb_bg.png';
import { ToastContainer } from '../UI/Toast/Toast';
import { useToast } from '../UI/Toast/UseToast';

function SignUp() {
    const [userType, setUserType] = useState('student'); // 'student' or 'admin'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        matNo: ''
    });
    const [showMatNo, setShowMatNo] = useState(false);
    const { toasts, addToast } = useToast();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUserTypeChange = (type) => {
        setUserType(type);
        // Clear matric number if switching to admin
        if (type === 'admin') {
            setFormData(prev => ({
                ...prev,
                matNo: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation
        if (!formData.name) {
            addToast('Please enter your name', 'error');
            return;
        }
        
        if (!formData.email) {
            addToast('Please enter your email', 'error');
            return;
        }
        
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            addToast('Please enter a valid email address', 'error');
            return;
        }
        
        // Only validate matric number for students
        if (userType === 'student' && !formData.matNo) {
            addToast('Please enter your matric number', 'error');
            return;
        }
        
        const submissionData = {
            ...formData,
            userType,
            ...(userType === 'admin' && { matNo: undefined }) // Remove matNo for admin
        };
        
        console.log('Form submitted:', submissionData);
        addToast(`${userType === 'admin' ? 'Admin' : 'Student'} account created successfully!`, 'success');
    };

    const toggleMatNoVisibility = () => {
        setShowMatNo(!showMatNo);
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
            <div className="flex-grow flex items-center justify-center px-4 py-4 sm:py-8">
                <motion.div 
                    className="w-full max-w-xs sm]]:max-w-sm md:max-w-md bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8"
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
                        Create an Account
                    </motion.h2>

                    {/* User Type Toggle */}
                    <motion.div
                        className="mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.65 }}
                    >
                        <div className="flex bg-gray-100 rounded-md p-1">
                            <motion.button
                                type="button"
                                onClick={() => handleUserTypeChange('student')}
                                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                                    userType === 'student'
                                        ? 'bg-white text-gunmetal-700 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-800'
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Student
                            </motion.button>
                            <motion.button
                                type="button"
                                onClick={() => handleUserTypeChange('admin')}
                                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                                    userType === 'admin'
                                        ? 'bg-white text-gunmetal-700 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-800'
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Admin
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name Field */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <motion.input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Ewere Charles"
                                className="w-full text-sm sm:text-base px-3 py-2 border border-slate-dark-500 rounded-[3px] focus:ring-1 focus:ring-slate-dark-800 focus:border-slate-dark-800 outline-none transition-all bg-transparent"
                                whileFocus={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                        </motion.div>

                        {/* Email Field */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <motion.input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="ewerecharles665@gmail.com"
                                className="w-full text-sm sm:text-base px-3 py-2 border border-slate-dark-500 rounded-[3px] focus:ring-1 focus:ring-slate-dark-800 focus:border-slate-dark-800 outline-none transition-all bg-transparent"
                                whileFocus={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                        </motion.div>

                        {/* Matric Number Field - Only show for students */}
                        {userType === 'student' && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                            >
                                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                                    Matric Number 
                                </label>
                                <div className="relative">
                                    <motion.input
                                        type={showMatNo ? "text" : "password"}
                                        name="matNo"
                                        value={formData.matNo}
                                        onChange={handleInputChange}
                                        placeholder="••••••••"
                                        className="w-full text-sm sm:text-base px-3 py-2 border border-slate-dark-500 rounded-[3px] focus:ring-1 focus:ring-slate-dark-800 focus:border-slate-dark-800 outline-none transition-all bg-transparent pr-10"
                                        whileFocus={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    />
                                    <motion.button
                                        type="button"
                                        onClick={toggleMatNoVisibility}
                                        className="absolute w-[35px] h-full flex justify-center items-center right-0 top-0 text-gray-400 hover:text-gray-600 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ 
                                            scale: 0.9,
                                            transition: { duration: 0.1 }
                                        }}
                                    >
                                        {showMatNo ? (
                                            <EyeOff size={18} className="text-gray-600" />
                                        ) : (
                                            <Eye size={18} className="text-gray-500" />
                                        )}
                                    </motion.button>
                                </div>
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className={`w-full py-3 rounded-lg font-semibold text-white text-sm sm:text-base transition-all duration-300 bg-gunmetal-700 hover:bg-gunmetal-800 shadow-md`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Create {userType} account
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

export default PageTransitionLeft(SignUp);
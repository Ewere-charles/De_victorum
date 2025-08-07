import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, Plus, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardTransition from '../../TestAnimation/transition/CardTransition';
import profile from '../../../assets/mobile/profileAbstract.png';
import SaveButton from '../../UI/SaveButton';

// Slide 1: Name Entry Component
const NameEntrySlide = ({ isActive, onNext }) => {
  const [name, setName] = useState('');

  return (
    <motion.div
      className="h-full w-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <motion.div 
        className="relative h-1/3 sm:h-2/5 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div className="relative w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-600 overflow-hidden flex items-center justify-center">
            {/* Profile picture upload area */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-4 sm:left-6">
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                  <UserPlus className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600" />
                </div>
              </div>
            </div>
            <img src={profile} alt="profile placeholder" className="w-full h-full object-cover opacity-50" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scrollable Content Area */}
      <motion.div 
        className="flex-1 overflow-y-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-20 sm:pb-24"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* Category */}
        <motion.p 
          className="text-gunmetal-700 text-base sm:text-lg inter-semibold mb-4 sm:mb-6 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Enter your name
        </motion.p>

        {/* Title */}
        <motion.p 
          className="text-2xl sm:text-3xl inter-thin font-extralight text-slate-dark-700 mb-8 sm:mb-12 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Ensure your name matches the one used in your current institution
        </motion.p>

        {/* Name Input */}
        <motion.div 
          className="space-y-4 sm:space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="space-y-2">
            <label className="block text-base sm:text-lg inter-semibold text-slate-dark-600">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-base sm:text-xl px-3 sm:px-4 py-3 border border-slate-dark-500 rounded-[3px] focus:ring-1 focus:ring-slate-dark-800 focus:border-slate-dark-800 outline-none transition-all bg-transparent"
              placeholder="Enter your full name e.g Ewere"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Slide 2: Seminar Details Component
const SeminarDetailsSlide = ({ isActive, onNext }) => {
  const [formData, setFormData] = useState({
    seminarTopic: '',
    seminarSupervisor: '',
    courseCode: '',
    matricNumber: '',
    presentationDate: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const inputs = [
    { label: "Seminar topic", field: "seminarTopic", type: "text" },
    { label: "Seminar supervisor", field: "seminarSupervisor", type: "text" },
    { label: "Course code", field: "courseCode", type: "text" },
    { label: "Matriculation number", field: "matricNumber", type: "text" },
    { label: "Date of presentation", field: "presentationDate", type: "date" }
  ];

  return (
    <motion.div
      className="h-full w-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Scrollable Content Area */}
      <motion.div 
        className="flex-1 overflow-y-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-20 sm:pb-24"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
      >

        {/* Title */}
        <motion.p
          className="text-3xl sm:text-4xl font-thin text-slate-dark-800 mb-6 mt-8 sm:mb-8 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Seminar details
        </motion.p>

        {/* Input Fields */}
        <motion.div 
          className="space-y-4 sm:space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {inputs.map((input, index) => (
            <div key={index} className="space-y-2 sm:space-y-3">
              <label className="block text-base sm:text-xl font-medium text-gray-700">
                {input.label}
              </label>
              <input
                type={input.type}
                value={formData[input.field]}
                onChange={(e) => handleInputChange(input.field, e.target.value)}
                className="w-full text-base sm:text-xl px-3 sm:px-4 py-3 border border-slate-dark-500 rounded-[3px] focus:ring-1 focus:ring-slate-dark-800 focus:border-slate-dark-800 outline-none transition-all bg-transparent"
                placeholder={`Enter ${input.label.toLowerCase()}`}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Slide 3: Additional Information Component
const AdditionalInfoSlide = ({ isActive, onNext }) => {
  const [formData, setFormData] = useState({
    department: '',
    faculty: '',
    institution: '',
    yearOfStudy: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const inputs = [
    { label: "Department", field: "department", type: "text" },
    { label: "Faculty", field: "faculty", type: "text" },
    { label: "Institution", field: "institution", type: "text" },
    { label: "Year of study", field: "yearOfStudy", type: "number" }
  ];

  return (
    <motion.div
      className="h-full w-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Scrollable Content Area */}
      <motion.div 
        className="flex-1 overflow-y-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-20 sm:pb-24"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* Category */}
        <motion.p 
          className="text-gray-500 text-base sm:text-lg inter-bold mb-2 mt-10 font-medium tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Additional information
        </motion.p>

        {/* Title */}
        <motion.h1 
          className="text-3xl sm:text-4xl font-thin text-slate-dark-800 mb-6 sm:mb-8 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Complete your profile
        </motion.h1>

        {/* Input Fields */}
        <motion.div 
          className="space-y-4 sm:space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {inputs.map((input, index) => (
            <div key={index} className="space-y-2 sm:space-y-3">
              <label className="block text-base sm:text-xl font-medium text-gray-700">
                {input.label}
              </label>
              <input
                type={input.type}
                value={formData[input.field]}
                onChange={(e) => handleInputChange(input.field, e.target.value)}
                className="w-full text-base sm:text-xl px-3 sm:px-4 py-3 border border-slate-dark-500 rounded-[3px] focus:ring-1 focus:ring-slate-dark-800 focus:border-slate-dark-800 outline-none transition-all bg-transparent"
                placeholder={`Enter ${input.label.toLowerCase()}`}
              />
            </div>
          ))}
        </motion.div>

        <SaveButton />
      </motion.div>
    </motion.div>
  );
};

// Main ProfileCard Component
const ProfileCardContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { component: NameEntrySlide, name: 'name' },
    { component: SeminarDetailsSlide, name: 'seminar' },
    { component: AdditionalInfoSlide, name: 'additional' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="fixed inset-0 bg-light-200 z-50 flex flex-col max-w-[1100px] mx-auto md:my-5">
      {/* Back to Home Button */}
      <motion.button
        className="absolute top-4 sm:top-6 left-4 sm:left-6 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/home">  
          <ArrowLeft
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" 
          />
        </Link>
      </motion.button>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <CurrentSlideComponent 
            key={currentSlide}
            isActive={true}
            onNext={nextSlide}
          />
        </AnimatePresence>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="bg-light-200 border-t border-gray-200 px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between shrink-0">
        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gray-800 w-6 sm:w-8' 
                  : 'bg-gray-300 w-2'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight 
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" 
          />
        </motion.button>
      </div>
    </div>
  );
};

const ProfileCard = CardTransition(ProfileCardContent);
export default ProfileCard;
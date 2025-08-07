import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, FileText, Clock, Check, Eye } from 'lucide-react';
import CardTransition from '../../TestAnimation/transition/CardTransition';

const SeminarReport = () => {
  const [currentPage, setCurrentPage] = useState('upload');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const navigate = useNavigate();

  const handleFileUpload = (files) => {
    if (files && files.length > 0) {
      const file = files[0];
      setUploadedFile({
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setCurrentPage('thankyou');
    }, 2000);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i]);
  };

  return (
    <div className="min-h-screen bg-light-200 flex flex-col w-full max-w-[1100px] mx-auto relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center px-6 py-4 bg-white border-b border-gray-200">
        <motion.button
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 mr-4"
          whileTap={{ scale: 0.95 }}
          onClick={() => currentPage === 'thankyou' ? setCurrentPage('upload') : navigate('/home')}
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </motion.button>
        <h1 className="text-lg font-semibold text-gray-900">Seminar Report Submission</h1>
      </div>

      <AnimatePresence mode="wait">
        {currentPage === 'upload' ? (
          <UploadPage 
            key="upload"
            uploadedFile={uploadedFile}
            onFileUpload={handleFileUpload}
            onSubmit={handleSubmit}
            isUploading={isUploading}
            canSubmit={!!uploadedFile}
            formatFileSize={formatFileSize}
          />
        ) : (
          <ThankYouPage 
            key="thankyou"
            uploadedFile={uploadedFile}
            onExit={() => setCurrentPage('upload')}
            formatFileSize={formatFileSize}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const UploadPage = ({ uploadedFile, onFileUpload, onSubmit, isUploading, canSubmit, formatFileSize }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="flex-1 flex flex-col w-full max-w-[1100px] mx-auto my-2 pb-12"
      initial="hidden"
      animate="show"
      variants={containerVariants}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <motion.div 
        className="px-6 py-8 bg-white"
        variants={itemVariants}
      >
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-32 bg-light-200 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
              <FileText className="w-8 h-8 text-gray-400 mb-2" />
              <div className="w-6 h-1 bg-blue-600 rounded mb-1"></div>
              <div className="w-8 h-1 bg-gray-300 rounded mb-1"></div>
              <div className="w-4 h-1 bg-gray-300 rounded"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Plus className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">Submit Your Seminar Report</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Upload your complete seminar report for the De Victorium Class of 2025
        </p>
      </motion.div>

      {/* Upload Sections */}
      <motion.div 
        className="flex-1 px-6 py-4 space-y-4 overflow-y-auto pb-24"
        variants={containerVariants}
      >
        {/* Required Documents */}
        <motion.div variants={itemVariants}>
          <UploadCard
            title="Seminar Report"
            description="Click to upload your complete seminar report document (DOC preferred)"
            icon={FileText}
            file={uploadedFile}
            onFileUpload={onFileUpload}
            accept=".pdf,.doc,.docx"
            formatFileSize={formatFileSize}
          />
        </motion.div>

        {/* Document Preview - Only show when file is uploaded */}
        {uploadedFile && (
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
            initial="hidden"
            animate="show"
          >
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">Uploaded File</h3>
            <motion.div variants={itemVariants}>
              <DocumentPreviewCard
                title="Seminar Report"
                file={uploadedFile}
                formatFileSize={formatFileSize}
              />
            </motion.div>
          </motion.div>
        )}

        {/* Terms */}
        <motion.div 
          className="mt-6"
          variants={itemVariants}
        >
          <p className="text-xs text-gray-500 leading-relaxed">
            By submitting, you confirm this is your original work for the De Victorium Class of 2025 seminar.
          </p>
        </motion.div>
      </motion.div>

      {/* Submit Button */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 w-full p-6 bg-white lg:bg-transparent border-t border-gray-200 max-w-[1100px] mx-auto"
        variants={itemVariants}
      >
        <motion.button
          onClick={onSubmit}
          disabled={!canSubmit || isUploading}
          className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
            canSubmit && !isUploading
              ? 'bg-blue-600 hover:bg-blue-700 active:scale-95'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
          whileTap={canSubmit && !isUploading ? { scale: 0.95 } : {}}
        >
          {isUploading ? (
            <div className="flex items-center justify-center space-x-2">
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span>Submitting...</span>
            </div>
          ) : (
            'Submit Report'
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const UploadCard = ({ title, description, icon: Icon, file, onFileUpload, accept, formatFileSize }) => {
  const handleClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = accept;
    input.onchange = (e) => onFileUpload(e.target.files);
    input.click();
  };

  return (
    <motion.div
      className={`p-4 border rounded-xl cursor-pointer transition-all duration-300 ${
        file 
          ? 'border-blue-300 bg-blue-50' 
          : 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50'
      }`}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            file ? 'bg-blue-600' : 'bg-blue-100'
          }`}>
            {file ? (
              <Check className="w-6 h-6 text-white" />
            ) : (
              <Icon className="w-6 h-6 text-blue-600" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 mb-1 truncate">{title}</h3>
            {file ? (
              <div className="text-sm text-gray-600 min-w-0">
                <p className="font-medium text-blue-600 truncate">{file.name}</p>
                <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
              </div>
            ) : (
              <p className="text-sm text-gray-600 truncate">{description}</p>
            )}
          </div>
        </div>
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
          file 
            ? 'border-blue-600 bg-blue-600' 
            : 'border-gray-300'
        }`}>
          {file && <Check className="w-4 h-4 text-white" />}
        </div>
      </div>
    </motion.div>
  );
};

const ThankYouPage = ({ uploadedFile, onExit, formatFileSize }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="flex-1 flex flex-col w-full"
      initial="hidden"
      animate="show"
      variants={containerVariants}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <motion.div 
        className="px-6 py-12 bg-white text-center"
        variants={containerVariants}
      >
        <motion.div 
          className="flex justify-center mb-8"
          variants={itemVariants}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="relative">
            <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
              <Clock className="w-16 h-16 text-blue-600" />
            </div>
            <motion.div 
              className="absolute bottom-4 right-4 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center"
              variants={itemVariants}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-1 h-3 bg-blue-800 rounded"></div>
                <div className="w-3 h-1 bg-blue-800 rounded ml-0.5"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h2 
          className="text-2xl font-bold text-gray-900 mb-4"
          variants={itemVariants}
        >
          Submission Received!
        </motion.h2>
        <motion.p 
          className="text-gray-600 leading-relaxed"
          variants={itemVariants}
        >
          Your seminar report for the De Victorium Class of 2025 has been successfully submitted. 
          You'll receive a confirmation email shortly. Thank you for your participation!
        </motion.p>
      </motion.div>

      {/* Uploaded Document Preview */}
      <motion.div 
        className="flex-1 px-6 py-4 overflow-y-auto pb-24"
        variants={containerVariants}
      >
        <motion.h3 
          className="font-semibold text-gray-900 mb-4"
          variants={itemVariants}
        >
          Submitted File
        </motion.h3>
        
        <div className="space-y-3">
          {uploadedFile && (
            <motion.div variants={itemVariants}>
              <DocumentPreviewCard 
                title="Seminar Report" 
                file={uploadedFile} 
                formatFileSize={formatFileSize}
              />
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Exit Button */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 w-full p-6 bg-white border-t border-gray-200 max-w-[1100px] mx-auto"
        variants={itemVariants}
      >
        <motion.button
          onClick={onExit}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-300"
          whileTap={{ scale: 0.95 }}
        >
          Return to Dashboard
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const DocumentPreviewCard = ({ title, file, formatFileSize }) => {
  const [showPreview, setShowPreview] = useState(false);

  const isImage = file.type.startsWith('image/');
  const getFileExtension = (filename) => {
    return filename.split('.').pop().toUpperCase();
  };

  return (
    <>
      <motion.div 
        className="p-4 bg-white border border-blue-200 rounded-xl shadow-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-900 mb-1 truncate">{title}</h4>
              <p className="text-sm font-medium text-blue-600 mb-1 truncate">{file.name}</p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span className="px-2 py-1 bg-gray-100 rounded font-medium">
                  {getFileExtension(file.name)}
                </span>
                <span>•</span>
                <span>{formatFileSize(file.size)}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {isImage && (
              <motion.button
                onClick={() => setShowPreview(true)}
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-4 h-4 text-gray-600" />
              </motion.button>
            )}
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {showPreview && isImage && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPreview(false)}
          >
            <motion.img
              src={file.url}
              alt={file.name}
              className="max-w-full max-h-full object-contain rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Report = CardTransition(SeminarReport);
export default Report;
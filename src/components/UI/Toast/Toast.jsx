import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';

const toastTypes = {
  success: {
    icon: <CheckCircle2 className="h-5 w-5" />,
    color: 'bg-green-500',
  },
  error: {
    icon: <AlertCircle className="h-5 w-5" />,
    color: 'bg-red-500',
  },
  warning: {
    icon: <AlertTriangle className="h-5 w-5" />,
    color: 'bg-yellow-500',
  },
  info: {
    icon: <Info className="h-5 w-5" />,
    color: 'bg-blue-500',
  },
};

export const Toast = ({ message, type = 'info', position = 'bottom', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const positionClasses = {
    top: 'top-4',
    bottom: 'bottom-4',
  };

  const variants = {
    initial: {
      y: position === 'top' ? -50 : 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      y: position === 'top' ? -50 : 50,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className={`fixed left-0 flex items-center justify-center w-screen max-w-[500px] ${positionClasses[position]} z-50`}
    >
      <div className="flex items-center w-auto gap-2 rounded-lg bg-white p-4 shadow-lg ring-1 ring-black/5">
        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${toastTypes[type].color} text-white`}>
          {toastTypes[type].icon}
        </div>
        <div className="max-w-xs text-sm font-medium text-gray-900">{message}</div>
        <button
          onClick={onClose}
          className="ml-2 rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export const ToastContainer = ({ toasts, position = 'bottom' }) => {
  return (
    <AnimatePresence>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          position={position}
          onClose={toast.onClose}
        />
      ))}
    </AnimatePresence>
  );
};
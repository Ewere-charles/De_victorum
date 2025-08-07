import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = uuidv4();
    const newToast = {
      id,
      message,
      type,
      onClose: () => removeToast(id),
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
};
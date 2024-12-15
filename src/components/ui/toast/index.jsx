'use client';

import { useEffect } from 'react';
import './styles.scss';

const Toast = ({ message, type = 'info', isVisible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => onClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
  <div className={`toast toast--${type}`}>
    <p className='toast-message'>{message}</p>
    <button className='toast-close' onClick={onClose}>
      &times;
    </button>
  </div>
  );
};

export default Toast;

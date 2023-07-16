import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Toaster.module.scss';

const Toaster = ({ type, title, message, duration = 3000, position = 'bottom-right', onClose = () => {} }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  if (!isVisible) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={`${styles.toaster} ${styles[type]} ${styles[position]}`}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.message}>{message}</div>
      </div>
    </div>,
    document.body
  );
};

export default Toaster;

import React, { useEffect, useState } from 'react';
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

  return isVisible ? (
    <div className={`${styles.toaster} ${styles[type]} ${styles[position]}`}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.message}>{message}</div>
      </div>
    </div>
  ) : null;
};

export default Toaster;

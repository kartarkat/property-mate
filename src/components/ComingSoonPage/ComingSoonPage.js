import React from 'react';
import styles from './ComingSoonPage.module.scss';
import { Link } from 'react-router-dom';

const DefaultConfig = {
  title: 'Coming Soon',
  description: 'We are working on something awesome!',
  details: [
    { label: 'Date', value: '2023-07-31' },
    { label: 'Time', value: '10:00 AM' },
  ],
  buttonText: 'Go to Home',
};

const ComingSoonPage = ({ config = DefaultConfig }) => {
  const { title, description, details, buttonText } = config;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {details && (
          <div className={styles.details}>
            {details.map((detail, index) => (
              <p className={styles.detailItem} key={index}>
                <span className={styles.detailLabel}>{detail.label}: </span>
                {detail.value}
              </p>
            ))}
          </div>
        )}
        <button className={styles.button}><Link to={'/'}>{buttonText}</Link></button>
      </div>
    </div>
  );
};

export default ComingSoonPage;

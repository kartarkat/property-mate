import React from 'react';
import styles from './ComingSoonPage.module.scss';
import { Link } from 'react-router-dom';
import { images } from '../../assets/images';

const DefaultConfig = {
  title: 'Coming Soon',
  description: 'We are working on something awesome!',
  buttonText: 'Go to Home',
  imgSrc: images.underConstruction,
};

const ComingSoonPage = ({ config = DefaultConfig }) => {
  const { title, description, buttonText, imgSrc } = config;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <img src={imgSrc} alt={title} />
        <button className={styles.button}><Link to={'/'}>{buttonText}</Link></button>
      </div>
    </div>
  );
};

export default ComingSoonPage;

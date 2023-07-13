import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { menuItems } from '../../constants';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import cx from 'classnames';

const headerData = {
  title: ['Property', 'Mate'],
  options: ['Rent', 'Buy', 'Sell']
}

const Header = ({ navigation = menuItems }) => {
  const [currentPage, setCurrentPage] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation()

  useEffect(() => {
    const currentNav = navigation.find(nav => nav.route === pathname)
    if (currentNav) setCurrentPage(currentNav)
  }, [pathname, navigation])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigationClick = (nav) => {
    setCurrentPage(nav);
    setIsMenuOpen(false);
  };

  const renderNavigationLinks = () => {
    return (
      <div className={styles.sectionTwo}>
        <nav className={cx(styles.navigation)}>
          {navigation.map((nav) => (
            <Link
              className={currentPage.id === nav.id ? styles.active : styles.notActive}
              onClick={() => handleNavigationClick(nav)}
              key={nav.id}
              to={nav.route}
            >
              {nav.label}
            </Link>))}
        </nav>
      </div>)
  };

  const renderButtons = () => {
    return (
      <div className={styles.sectionThree}>
        <button>Login in</button>
        <span></span>
        <button className={styles.signUp}>Sign up</button>
      </div>)
  }

  const renderTitle = () => {
    const { title, options } = headerData
    return (
      <div className={styles.sectionOne}>
        <h1 className={styles.title}>
          {title.map((data, ind) => <span key={ind}>{data}</span>)}
        </h1>
        <div className={styles.options}>
          {options.map((data, ind) => <div key={ind}><span>{data}</span><PlayArrowIcon /></div>)}
        </div>
      </div>
    )
  }

  const renderMobileMenu = () => {
    return (
      <div className={cx(styles.mobileMenu)}>
        {renderNavigationLinks()}
        {renderButtons()}
        <div className={styles.closeIcon} onClick={toggleMenu}><CloseIcon /></div>
      </div>
    );
  };

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header}>
          {renderTitle()}
          {renderNavigationLinks()}
          {renderButtons()}
          <div className={styles.hamburger} onClick={toggleMenu}><MenuIcon /></div>
        </div>
        {isMenuOpen ? renderMobileMenu() : ''}
      </div>
    </header >
  );
};

export default Header;

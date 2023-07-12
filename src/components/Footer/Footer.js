import React from 'react'
import styles from './Footer.module.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import { Link, NavLink } from 'react-router-dom';

const AboutData = {
  heading: 'MiCasa',
  content: 'Copyrights MiCasa Homes and Properties. All rights reserved.',
  socialIcons: [<InstagramIcon />, <TwitterIcon />, <YouTubeIcon />, <LinkedInIcon />]
}

const companyMenu = {
  label: 'Company',
  menus: [
    { label: 'About us', route: '/' },
    { label: 'Blog', route: '/' },
    { label: 'Contact us', route: '/contact-us' },
    { label: 'Pricing', route: '/' },
    { label: 'Testimonials', route: '/' },
  ]
}

const supportMenu = {
  label: 'Support',
  menus: [
    { label: 'Help Center', route: '/' },
    { label: 'Terms of service', route: '/' },
    { label: 'Legal', route: '/contact-us' },
    { label: 'Privacy policy', route: '/' },
    { label: 'Status', route: '/' },
  ]
}

const Footer = () => {
  const renderAboutPage = (data) => {
    const { heading, content, socialIcons } = data;
    return (
      <div className={styles.aboutPage}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.content}>{content}</div>
        <div className={styles.socialMedia}>{socialIcons.map(icon => icon)}</div>
      </div>
    )
  }

  const renderMenu = (data) => {
    const { label, menus } = data
    return (
      <div className={styles.menu}>
        <div className={styles.subheading}>{label}</div>
        <div className={styles.menuItems}>
          {menus.map((menu, ind) => (
            <Link
              key={ind}
              to={menu.route}
            >
              {menu.label}
            </Link>))}
        </div>
      </div>
    )
  }

  const renderNewsLetter = () => {
    return (
      <div className={styles.newsLetter}>
        <div className={styles.label}>Stay up to date</div>
        <form>
          <div className={styles.emailContainer}>
            <input type="email" name="" id="" />
            <span className={styles.sendIcon}><SendIcon /></span>
          </div>
        </form>
      </div>
    )
  }

  return (
    <footer>
      <div className={styles.container}>
        {renderAboutPage(AboutData)}
        {renderMenu(companyMenu)}
        {renderMenu(supportMenu)}
        {renderNewsLetter()}
      </div>
    </footer>
  )
}



export default Footer
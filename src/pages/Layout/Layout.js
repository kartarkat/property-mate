import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './Layout.module.scss'
import { Outlet } from 'react-router-dom';

const Layout = ({outlet}) => {
    return (
        <div className={styles.container}>
            <Header />
            <main>{outlet ? outlet : <Outlet />}</main>
            <Footer />
        </div>
    )
}

export default Layout
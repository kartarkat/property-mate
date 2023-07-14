import React from 'react'
import styles from './Home.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sectionOne}>
                <div className={styles.title}>Buy, Sell, Rent.</div>
                <div className={styles.heading}>The best deals, for both Realtors and Customers.</div>
                <div className={styles.subHeading}><span>Explore More </span><ArrowForwardIcon /></div>
            </div>
            <div className={styles.sectionTwo}>test 2 data</div>
            <div className={styles.sectionThree}>test data</div>

        </div>
    )
}

export default Home
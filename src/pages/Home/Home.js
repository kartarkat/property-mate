import React from 'react'
import styles from './Home.module.scss'


const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sectionOne}></div>
            <div className={styles.sectionTwo}>test 2 data</div>
            <div className={styles.sectionThree}>test data</div>

        </div>
    )
}

export default Home
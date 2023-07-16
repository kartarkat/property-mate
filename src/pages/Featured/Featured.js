import React, { useEffect, useRef, useState } from 'react'
import HouseIcon from '@mui/icons-material/House';
import VillaIcon from '@mui/icons-material/Villa';
import ApartmentIcon from '@mui/icons-material/Apartment';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import WifiIcon from '@mui/icons-material/Wifi';
import { images } from '../../assets/images';
import styles from './Featured.module.scss'
import cx from 'classnames'

const defaultTabConfig = [
    { label: 'House', id: 'house', icon: <HouseIcon /> },
    { label: 'Villa', id: 'villa', icon: <VillaIcon /> },
    { label: 'Apartment', id: 'apartment', icon: <ApartmentIcon /> },
]

const defaultHouseConfig = [
    {
        label: 'Jabi House, Abuja',
        id: 'jabi-abuja',
        price: 100000,
        rating: 4.5,
        imgSrc: images.house1,
        bedroom: 3,
        interest: '31',
    },
    {
        label: 'Lekki House, Lagos',
        id: 'lekki-lagos',
        price: 124000,
        rating: 4.8,
        imgSrc: images.house2,
        bedroom: 4,
        interest: '23',
    },
    {
        label: 'Machu Picchu House, Peru',
        id: 'machu-picchu-peru',
        price: 95000,
        rating: 4.2,
        imgSrc: images.house3,
        bedroom: 2,
        interest: '44',
    },
    {
        label: 'Santorini House, Greece',
        id: 'santorini-greece',
        price: 135000,
        rating: 4.7,
        imgSrc: images.house4,
        bedroom: 3,
        interest: '55',
    },
    {
        label: 'Kyoto House, Japan',
        id: 'kyoto-japan',
        price: 88000,
        rating: 4.6,
        imgSrc: images.house1,
        bedroom: 2,
        interest: '18',
    },
    {
        label: 'Grand Canyon House, USA',
        id: 'grand-canyon-usa',
        price: 112000,
        rating: 4.4,
        imgSrc: images.house2,
        bedroom: 3,
        interest: '42',
    },
];

const Featured = ({ houseConfig = defaultHouseConfig, tabConfig = defaultTabConfig }) => {
    const [currentTab, setCurrentTab] = useState({})
    const [currentHouse, setCurrentHouse] = useState({})
    const [activeArrow, setActiveArrow] = useState('right');
    const currentHouseRef = useRef()


    useEffect(() => {
        setCurrentTab(tabConfig[0])
        setCurrentHouse(houseConfig[0])
    }, [tabConfig, houseConfig])

    useEffect(() => {
        if (currentHouseRef.current) {
            currentHouseRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest',
            });
        }
    }, [currentHouse]);


    const handlePreviousHouse = () => {
        if (currentHouse.id === houseConfig[0].id) return null
        const currentIndex = houseConfig.findIndex((house) => house.id === currentHouse.id);
        if (currentIndex > 0) {
            setCurrentHouse(houseConfig[currentIndex - 1]);
        }
        if (houseConfig[0])
            setActiveArrow('left');
    };

    const handleNextHouse = () => {
        if (currentHouse.id === houseConfig[houseConfig.length - 1].id) return null
        const currentIndex = houseConfig.findIndex((house) => house.id === currentHouse.id);
        if (currentIndex < houseConfig.length - 1) {
            setCurrentHouse(houseConfig[currentIndex + 1]);
        }
        if (houseConfig[houseConfig.length - 1])
            setActiveArrow('right');
    };

    const renderTab = (data) => {
        const { label, id, icon } = data
        return (<div
            key={id}
            onClick={() => setCurrentTab(data)}
            className={cx(styles.tab, currentTab.id === id ? styles.activeTab : '')}
        >{icon} <span>{label}</span></div>)
    }

    const renderBuilding = (data) => {
        const { label, id, price, imgSrc, bedroom, interest } = data
        const currentCheck = currentHouse.id === id;
        return (
            <div
                key={id}
                ref={currentCheck ? currentHouseRef : null}
                className={cx(styles.building, currentCheck ? styles.activeBuilding : '')}
                onClick={() => setCurrentHouse(data)}
            >
                <img src={imgSrc} alt={id} />
                <div className={styles.details}>
                    <div className={styles.label}>{label}</div>
                    <div className={styles.otherDetails}>
                        <div className={styles.sectionOne}>
                            <div><PersonIcon /></div>
                            <div>{bedroom} bedroom</div>
                        </div>
                        <div className={styles.sectionOne}>
                            <div><WifiIcon /></div>
                            <div>wifi</div>

                        </div>
                    </div>
                </div>
                <div className={styles.price}><span>₹</span>{price} <span>/annum</span></div>
                <div className={styles.interest}>
                    {interest} have interest in this property
                </div>
                <button className={styles.viewMore}><span>view more →</span></button>
            </div>
        )
    }


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}><span>Featured </span>Houses</div>
                <div className={styles.tabs}>{tabConfig.map(renderTab)}</div>
                <div className={styles.scrollButtons}>

                    <KeyboardArrowLeftIcon
                        className={cx(styles.right, activeArrow === 'left' ? styles.activeArrow : '')}
                        onClick={handlePreviousHouse}

                    />
                    <KeyboardArrowLeftIcon
                        className={cx(styles.left, activeArrow === 'right' ? styles.activeArrow : '')}
                        onClick={handleNextHouse}
                    />
                </div>
            </div>
            <div className={styles.houses}>
                {houseConfig.map(renderBuilding)}
            </div>

        </div>
    )
}

export default Featured
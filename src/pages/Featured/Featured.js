import React from 'react'
import HouseIcon from '@mui/icons-material/House';
import VillaIcon from '@mui/icons-material/Villa';
import ApartmentIcon from '@mui/icons-material/Apartment';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PersonIcon from '@mui/icons-material/Person';
import WifiIcon from '@mui/icons-material/Wifi';
import { images } from '../../assets/images';

const tabConfig = [
    { label: 'House', id: 'house', icon: <HouseIcon /> },
    { label: 'Villa', id: 'villa', icon: <VillaIcon /> },
    { label: 'Apartment', id: 'apartment', icon: <ApartmentIcon /> },
]

const houseConfig = [
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

const Featured = () => {

    const renderTab = (data) => {
        const { label, id, icon } = data
        return (<div key={id}>{icon} <span>{label}</span></div>)
    }

    const renderBuilding = (data) => {
        const { label, id, price, imgSrc, bedroom, interest } = data
        return (
            <div className="building">
                <img src={imgSrc} alt={id} />
                <div className="details">
                    <span>{label}</span>
                    <span><PersonIcon />{bedroom} bedroom <WifiIcon /> wifi</span>
                </div>
                <div className="price">{price}</div>
                <div className="interest">
                    {interest}have interest in this property
                </div>
                <button>view more</button>
            </div>
        )

    }
    return (
        <div>
            <div className="header">
                <div className="title">Featured Houses</div>
                <div className="tabs">{tabConfig.map(renderTab)}</div>
                <div className="scrollBtns">
                    <KeyboardArrowLeftIcon />
                    <KeyboardArrowLeftIcon />
                </div>
            </div>
            <div className="houses">
                {houseConfig.map(renderBuilding)}
            </div>

        </div>
    )
}

export default Featured
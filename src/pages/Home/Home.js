import React from 'react'
import styles from './Home.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormHelper from '../../components/FormHelper/FormHelper';
import { images } from '../../assets/images';


const homeFormConfig = [
    {
        label: 'Location',
        name: 'location',
        type: 'select',
        options: [
            { label: 'Lagos, Nigeria', value: 'lagos-nigeria' },
            { label: 'New York City, USA', value: 'new-york-city-usa' },
            { label: 'Paris, France', value: 'paris-france' },
            { label: 'Tokyo, Japan', value: 'tokyo-japan' },
            { label: 'Sydney, Australia', value: 'sydney-australia' },
        ],
        required: true,
    },
    {
        label: 'Category',
        name: 'category',
        type: 'select',
        options: [
            { label: '3 Bedroom Duplex', value: '3-bedroom-duplex' },
            { label: 'Luxury Suite', value: 'luxury-suite' },
            { label: 'Beachfront Villa', value: 'beachfront-villa' },
            { label: 'Mountain Cabin', value: 'mountain-cabin' },
            { label: 'City Loft', value: 'city-loft' },
        ],
        required: true,
    },
    {
        label: 'Budget',
        name: 'budget',
        type: 'select',
        options: [
            { label: '2999 - 9999', value: '2999-9999' },
            { label: '5000 - 10000', value: '5000-10000' },
            { label: '10000 - 15000', value: '10000-15000' },
            { label: '15000 - 20000', value: '15000-20000' },
            { label: '20000+', value: '20000+' },
        ],
        required: true,
    },
];

const processConfig = [
    { imgSrc: images.process1, subHeading: 'Find A Listing', content: 'Make a choice of the type of apartment and qualities that appeal to your interest.' },
    { imgSrc: images.process2, subHeading: 'Talk to an Agent', content: 'Our Agents are available 24 Hours Mon-Sat.' },
    { imgSrc: images.process3, subHeading: 'Set the date and Move in!', content: 'Make payments, get receipt and all other important documents, set your move-in date.' },
]

const Home = () => {
    const handleSubmit = (data) => {
        console.log('home data', data)
    }

    const renderProcess = (data, index) => {
        const { imgSrc, subHeading, content } = data
        return (
            <div key={index} className={styles.processContainer}>
                <div key={index} className={styles.process}>
                    <img src={imgSrc} alt={subHeading} />
                    <div className={styles.subSection}>
                        <div className={styles.subHeading}>{subHeading}</div>
                        <div className={styles.content}>{content}</div>
                    </div>
                </div>
                {processConfig.length !== index + 1 ? <ArrowForwardIcon /> : ''}
            </div>
        )

    }

    return (
        <div className={styles.container}>
            <div className={styles.sectionOne}>
                <div className={styles.title}>Buy, Sell, Rent.</div>
                <div className={styles.heading}>The best deals, for both Realtors and Customers.</div>
                <div className={styles.subHeading}><span>Explore More </span><ArrowForwardIcon /></div>
            </div>
            <div className={styles.sectionThree}>
                <div className={styles.banner}>
                    <div className={styles.heading}>What Do you need?</div>
                    <FormHelper config={homeFormConfig} onSubmit={handleSubmit} />
                </div>
            </div>
            <div className={styles.sectionTwo}>
                <div className={styles.heading}>How It Works</div>
                <div className={styles.steps}>
                    {processConfig.map(renderProcess)}
                </div>
            </div>

        </div>
    )
}

export default Home
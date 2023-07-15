import React from 'react'
import styles from './Home.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormHelper from '../../components/FormHelper/FormHelper';

const config = [
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
  
  
const Home = () => {
    const handleSubmit = (data) => {
        console.log('home data', data)

    }
    return (
        <div className={styles.container}>
            <div className={styles.sectionOne}>
                <div className={styles.title}>Buy, Sell, Rent.</div>
                <div className={styles.heading}>The best deals, for both Realtors and Customers.</div>
                <div className={styles.subHeading}><span>Explore More </span><ArrowForwardIcon /></div>
            </div>
            <div className={styles.sectionTwo}>
                <div className="heading">How It Works</div>
            </div>
            <div className={styles.sectionThree}>
                <div className="heading">What Do you need?</div>
                <FormHelper config={config} onSubmit={handleSubmit} />;
            </div>

        </div>
    )
}

export default Home
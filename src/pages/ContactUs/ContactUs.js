import React from 'react';
import styles from './ContactUs.module.scss';
import FormHelper from '../../components/FormHelper/FormHelper';
// import FormHelper from './FormHelper';


const ContactInfo = ({ label, value }) => (
  <div className={styles.infoItem}>
    <span className={styles.infoLabel}>{label}:</span>
    <span className={styles.infoValue}>{value}</span>
  </div>
);

const contactInfoConfig = [
  { label: 'Email', value: 'info@example.com' },
  { label: 'Phone', value: '+1 234 567 890' },
  { label: 'Address', value: '123 Main Street, City, Country' },
];

const contactFormConfig = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    required: true,
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    required: true,
  },
  {
    label: 'Message',
    name: 'message',
    type: 'textarea',
    required: true,
  },
];

const ContactUs = () => {
  const handleSubmit = (formData) => {
    // Handle form submission
    console.log(formData);
  };

  const formStyles = {
    flexDirection: 'column',
    alignItems: 'flex-start',
  }

  const submitConfig = { label: 'Send request', btnStyles: { position: 'relative', float: 'right', bottom: 0} }


  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.description}>
        Please fill out the form below to get in touch with us.
      </p>
      </div>
      <div className={styles.formContainer}>
        <FormHelper formStyles={formStyles} submitConfig={submitConfig} config={contactFormConfig} onSubmit={handleSubmit} />
      </div>
      <div className={styles.info}>
        <div className={styles.subHeading}>Reach out to us here:</div>
        {contactInfoConfig.map((info, index) => (
          <ContactInfo key={index} label={info.label} value={info.value} />
        ))}
      </div>

    </div>
  );
};

export default ContactUs;
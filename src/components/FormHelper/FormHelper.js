import React, { useState } from 'react';
import styles from './FormHelper.module.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Toaster from '../Toaster/Toaster';

const FormHelper = ({ config = [], onSubmit, submitConfig = {}, formStyles }) => {
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [showToaster, setShowToaster] = useState(false)
    const { label = 'Search PropertyMate', btnStyles = {} } = submitConfig

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform form validation
        const errors = {};
        for (const field of config) {
            const { label, name, required } = field;
            if (required && !formData[name]) {
                errors[name] = `${label} is required`;
            }
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            onSubmit(formData);
            setShowToaster(prev => !prev)
            setFormData(config)
        }

        // Reset the toaster after a delay (5000 milliseconds)
        setTimeout(() => {
            setShowToaster(false);
        }, 5000);
    };

    const renderFields = (field, index) => {
        const { label, name, type, options } = field;
        const inputId = name.replace(/\s+/g, '-').toLowerCase();

        const renderSelect = () => {
            return (
                <select
                    id={inputId}
                    name={name}
                    value={formData[name] || ''}
                    onChange={handleChange}
                >
                    <option value="" disabled hidden>
                        Select {label}
                    </option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            );
        };

        const renderInput = () => (
            <input
                type={type}
                id={inputId}
                name={name}
                value={formData[name] || ''}
                placeholder={`Please Enter ${label}`}
                onChange={handleChange}
            />
        );

        const renderInputField = () => {
            switch (type) {
                case 'select':
                    return renderSelect();
                default:
                    return renderInput();
            }
        };

        return (
            <div key={index} className={styles.field}>
                <label htmlFor={inputId} className={styles.label}>{label}</label>
                {renderInputField()}
                {<div className={styles.error}>{formErrors[name] ? formErrors[name] : ''}</div>}
            </div>
        );
    };

    return (
        <div className={styles.container} >
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldsContainer} style={formStyles}>
                    {config.map(renderFields)}
                </div>
                <button type="submit" className={styles.submitButton} style={btnStyles}>
                    <span>{label}</span><ArrowForwardIcon />
                </button>
            </form>
            {showToaster ?
                <Toaster type="success"
                    title="Form submitted successfully"
                    message="This feature is coming soon."
                    position="top-center"
                    duration={5000}
                /> : ''
            }
        </div>
    );
};

export default FormHelper;

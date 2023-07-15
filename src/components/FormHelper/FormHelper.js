import React, { useState } from 'react';
import styles from './FormHelper.module.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FormHelper = ({ config = [], onSubmit, submitConfig = {}, formStyles }) => {
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});
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
        }
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
                    defaultValue={''}
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
                {<div className={styles.error}>{formErrors[name] ? formErrors[name]  : ''}</div>}
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
        </div>
    );
};

export default FormHelper;

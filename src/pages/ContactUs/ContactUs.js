import React, { useState } from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <button className="btn" onClick={handleOpenModal}>
        Open Modal
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modal Content</h2>
            <button className="close-icon" onClick={handleCloseModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs
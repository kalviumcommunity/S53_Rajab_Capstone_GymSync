import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = (e) => {
    if (e.target.classList.contains('modal')) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <p>This is a modal. Click anywhere outside this box to close it.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
import React, { useEffect } from 'react';
import './InfoTooltip.css';

export default function InfoTooltip({ image, message, isOpen, setIsOpen }) {
  function closePopup() {
    setIsOpen(false);
  };

  function handleLayoutClick(evt) {
    if (evt.target === evt.currentTarget) {
      closePopup();
    }
  };

  function handleEscapeTap(evt) {
    if (evt.key === 'Escape') {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleEscapeTap);

    return () => {
      document.removeEventListener('keyup', handleEscapeTap);
    };
  });

  return (
    <div onClick={handleLayoutClick} className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <img className="popup__image" src={image} alt="Статус запроса" />
        <p className="popup__text">{message}</p>
        <button className="popup__close-button" onClick={closePopup} />
      </div>
    </div>
  );
};

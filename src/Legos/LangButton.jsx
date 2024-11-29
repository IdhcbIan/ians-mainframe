import React, { useState } from 'react';
import '../App.css';

const LangButton = ({ onLanguageChange }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    setLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <button onClick={toggleLanguage}>
      {language === 'en' ? 'Eng' : 'Pt'}
    </button>
  );
};

export default LangButton;

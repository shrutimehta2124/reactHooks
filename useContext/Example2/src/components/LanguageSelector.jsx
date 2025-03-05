import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <h2>Language Example</h2>
      <p>Selected Language: {language}</p>
      <button onClick={() => setLanguage('English')}>English</button>
      <button onClick={() => setLanguage('Spanish')}>Spanish</button>
    </div>
  );
};

export default LanguageSelector;


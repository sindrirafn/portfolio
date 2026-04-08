import React, { createContext, useContext, useState } from 'react';
import { contentEn } from '../data/content.en.js';
import { contentIs } from '../data/content.is.js';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const content = language === 'is' ? contentIs : contentEn;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'is' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
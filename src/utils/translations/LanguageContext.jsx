import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations, defaultLanguage } from '../../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLanguage = defaultLanguage }) => {
  const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);

  const t = useCallback((key, replacements = {}) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = translations[defaultLanguage];
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
          } else {
            console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`);
            return key;
          }
        }
        break;
      }
    }

    // Handle string interpolation
    if (typeof value === 'string') {
      return Object.keys(replacements).reduce((str, key) => {
        return str.replace(`{${key}}`, replacements[key]);
      }, value);
    }

    return value || key;
  }, [currentLanguage]);

  const changeLanguage = useCallback((language) => {
    if (translations[language]) {
      setCurrentLanguage(language);
    }
  }, []);

  const value = {
    currentLanguage,
    changeLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}; 
import React, { createContext, useContext, useState, useEffect } from 'react';
import koTranslations from '../locales/ko.json';
import enTranslations from '../locales/en.json';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // localStorage에서 저장된 언어 설정을 가져오거나 기본값으로 'ko' 사용
    return localStorage.getItem('modudao-language') || 'ko';
  });

  const translations = {
    ko: koTranslations,
    en: enTranslations
  };

  // 언어가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('modudao-language', language);
  }, [language]);

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // 키를 찾을 수 없으면 원본 키 반환
      }
    }

    if (typeof value === 'string') {
      // 파라미터 치환 (예: {year} -> 2025)
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey] || match;
      });
    }

    return value || key;
  };

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
    }
  };

  const value = {
    language,
    changeLanguage,
    t,
    isKorean: language === 'ko',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

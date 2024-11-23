import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ti from './locales/ti.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ti: { translation: ti }
  },
  lng: 'en', // default language
  fallbackLng: 'en', // fallback language
  interpolation: { escapeValue: false }
});

export default i18n;

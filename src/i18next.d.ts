import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Load translations from public folder
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Default language
    debug: process.env.NODE_ENV === 'development', // Debug mode in development
    interpolation: {
      escapeValue: false, // React already escapes content
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Translation files path
    },
    ns: ['common'], // Default namespace
    defaultNS: 'common',
  });

export default i18n;

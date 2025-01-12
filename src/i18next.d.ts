import 'react-i18next';

declare module 'react-i18next' {
  interface Resources {
    en: typeof import('../public/locales/en/common.json');
    ar: typeof import('../public/locales/ar/common.json');
  }
}
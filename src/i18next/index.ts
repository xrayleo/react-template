import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tc from './local/tc.json';
import en from './local/en.json';

i18n
  // 将i18n实例传递给react-i18next
  .use(initReactI18next)
  // 初始化i18next
  // 所有配置选项: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {
        translation: en,
      },
      tc: {
        translation: tc,
      },
    },
    fallbackLng: 'en',
    lng: 'en',
    debug: false,
    returnObjects: true,
    interpolation: {
      escapeValue: false, //react默认转义,所以不需要
    },
  });

export default i18n;


import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import _ from 'lodash';

import en from './trans/en.json';
import ru from './trans/ru.json';

export default {
  LOCALES: {
    RU: 'ru',
    ENG: 'en',
  },

  get LOCALE_DEFAULT() {
    return this.LOCALES.ENG;
  },

  getLocales() {
    const res = _.map(this.LOCALES, (key) => key);

    return res;
  },

  init() {
    i18n.fallbacks = true;
    i18n.translations = {
      en,
      ru,
    };

    const fallback = {
      languageTag: this.LOCALE_DEFAULT,
      isRTL: false,
    };

    const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) || fallback;

    i18n.locale = languageTag;
  },

  setLocale(locale: string) {
    i18n.locale = locale;
  },

  t(key: string) {
    return i18n.t(key, { defaultValue: '' });
  },

};

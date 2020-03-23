import AsyncStorage from '@react-native-community/async-storage';
import { AsyncTrunk } from 'mobx-sync';

import Localize from 'src/Utils/Localize';

import { RootStore as RootStoreOrig } from './store';

export default async function setupRootStore() {
  const rootStore = RootStoreOrig;

  try {
    const trunk = new AsyncTrunk(rootStore, {
      storage: AsyncStorage,
      delay: 1e3,
    });
    await trunk.init();
    rootStore.storeLoaded = true;
  } catch (e) {
    // empty
  }

  const { settings } = rootStore;

  const localeDefault = Localize.LOCALE_DEFAULT;
  const { locale } = settings;

  if (localeDefault !== locale) {
    settings.setLocale(settings.locale);
  }

  return rootStore;
}

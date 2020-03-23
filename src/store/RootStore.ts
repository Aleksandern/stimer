import { ignore } from 'mobx-sync';
import remotedev from 'mobx-remotedev';

import SettingsStore from './SettingsStore';
import StopwatchStore from './StopwatchStore';

const devWrap = <T>(store: T, storeName?: string) => {
  let res = store;

  if (__DEV__) {
    res = remotedev(store, {
      name: storeName,
      // global: true,
    });
  }

  return res;
};

const Settings = devWrap(SettingsStore);
const Stopwatch = devWrap(StopwatchStore);

export default class RootStore {
  @ignore
  storeLoaded = false;

  settings = new Settings();

  @ignore
  stopwatch = new Stopwatch();
}

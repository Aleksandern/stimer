import {
  action,
  observable,
  computed,
} from 'mobx';

import Localize from 'src/Utils/Localize';

type lockScreenT = boolean;
type languageT = string;

export default class SettingsStore {
  @observable
  language: languageT = Localize.LOCALES.ENG;

  @observable
  lockScreen: lockScreenT = false;

  @action.bound
  async setLocale(locale: languageT) {
    Localize.setLocale(locale);
    this.language = locale;
  }

  @action.bound
  trans(key: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { language } = this;
    const res = Localize.t(key);

    return res;
  }

  @action.bound
  setLockScreen(lockScreen: lockScreenT) {
    this.lockScreen = lockScreen;
  }

  @computed
  get locale() {
    return this.language;
  }

  @computed
  get isLockScreen() {
    return this.lockScreen;
  }
}

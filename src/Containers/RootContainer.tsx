import React, { useState, useEffect } from 'react';

import Localize from 'src/Utils/Localize';

import {
  RootStoreProvider,
  setupRootStore,
  RootStoreModel,
} from 'src/Store';

import AppContainer from './AppContainer';

Localize.init();

function RootContainer() {
  const [rootStore, setRootStore] = useState<RootStoreModel | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setupRootStore().then(setRootStore);
    })();
  }, []);

  const isRootStoreLoaded = rootStore && rootStore.storeLoaded;

  if (
    !isRootStoreLoaded
  ) {
    return null;
  }

  return (
    <RootStoreProvider value={rootStore as RootStoreModel}>
      <AppContainer />
    </RootStoreProvider>
  );
}

export default RootContainer;

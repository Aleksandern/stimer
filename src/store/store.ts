import { createContext, useContext } from 'react';

import RootStoreModel from './RootStore';

export const RootStore = new RootStoreModel();

const RootStoreContext = createContext(RootStore);

export const RootStoreProvider = RootStoreContext.Provider;

export const useStores = () => useContext(RootStoreContext);

export { RootStoreModel };

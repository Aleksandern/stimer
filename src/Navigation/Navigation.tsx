
import React from 'react';
import {
  observer,
  useLocalStore,
} from 'mobx-react';
import { NavigationContainer } from '@react-navigation/native';
import 'mobx-react/batchingOptOut';
import SplashScreen from 'react-native-splash-screen';

import {
  useStores,
} from 'src/Store';

import NavigationService from './NavigationService';
import {
  Root,
} from './Navigators';

export default observer(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { settings: { locale } } = useStores(); // needed to re-render on locale change
  const localStore = (() => ({
    isDone: false,
  }));

  const [isLoaded, setIsLoaded] = React.useState(false);

  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  function hz() {
    console.log('!!!HZHZ', {  });

  }

  React.useEffect(() => {
    const state = navigationRef.current.getRootState();

    setIsLoaded(true);
    SplashScreen.hide();
    console.log('!!!ZZZZ', { state });

    // Save the initial route name
    // routeNameRef.current = getActiveRouteName(state);
  }, []);

  return (
    <NavigationContainer
      onStateChange={() => {
        console.log('!!!CHANGE', {  });
      }}
      ref={(c) => {
        if (c) {
          navigationRef.current = c;
          NavigationService.setTopLevelNavigator(c);
        }
      }}
    >
      {isLoaded && <Root hz={hz} />}
      {/* <Root hz={hz} /> */}
    </NavigationContainer>
  );
});

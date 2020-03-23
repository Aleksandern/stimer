
import {
  CommonActions,
  useNavigation,
  NavigationState,
} from '@react-navigation/native';

// eslint-disable-next-line no-underscore-dangle
let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  // console.log('!!!: setTopLevelNavigator -> navigatorRef', navigatorRef);
  if (!navigatorRef) {
    return;
  }

  _navigator = navigatorRef;
}

function navigate(name: string, params?: object) {
  if (!_navigator) {
    return;
  }

  _navigator.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
}

function getCurrentRoute(stateInp?: NavigationState) {
  const res = {};
  let state = stateInp;

      console.log('!!!: getCurrentRoute -> _navigator', { state, _navigator });

  if (!state) {
    if (!_navigator) {
      return res;
    }


    state = _navigator.getRootState();
    console.log('!!!: getCurrentRoute -> state', state);
  }

  if (!state) {
    return res;
  }

  if (!state.routes) {
    return state;
  }

  const route = state.routes[state.index];

  if (route.state) {
    // Dive into nested navigators
    return getCurrentRoute(route.state as NavigationState);
  }

  return res;
}

export default {
  setTopLevelNavigator,
  navigate,
  useNavigation,
  getCurrentRoute,
};

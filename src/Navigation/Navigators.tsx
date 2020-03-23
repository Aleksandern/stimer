
import * as React from 'react';
import { observer, useObserver } from 'mobx-react';
import {
  TouchableOpacity,
} from 'react-native';
import {
  NavigationContainer,
  RouteProp,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
  StackNavigationProp,
  StackNavigationOptions,
} from '@react-navigation/stack';

import {
  Icon,
  Text,
} from 'native-base';

import ModalDropdown from 'react-native-modal-dropdown';

import {
  useStores,
} from 'src/Store';

import * as screens from 'src/Screens';
import {
  sg,
} from 'src/Styles';

import routeNames from './routeNames';
import NavigationService from './NavigationService';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// export type PropsOfType<T, O> = ({
//   [P in keyof T]: T[P] extends O ? P : never
// })[keyof T];

// type RootStackParamList = {
//   TimersTab: {
//     aaa: string,
//   },
// };
// type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'TimersTab'>;
// // type ProfileScreenRouteProp = PropsOfType<RootStackParamList, undefined>;
// type Props = {
//   route: ProfileScreenRouteProp;
//   // params: object,
// };


// type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TimersTab'>;


// type Routes = {
//   route: ProfileScreenRouteProp;
//   navigation: ProfileScreenNavigationProp;
//   // params: object,
// };

interface tabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const options = {
  // transitionSpec: {
  //   open: TransitionSpecs.FadeInFromBottomAndroidSpec,
  //   close: TransitionSpecs.TransitionIOSSpec,
  // },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  // StackCardInterpolationProps: StackCardInterpolatedStyle.
};

// export function TimersTab() {
export const TimersTab = observer(() => {
  const { settings: { trans } } = useStores();
  const titleStopwatch = trans('stopwatch');
  const titleTabata = trans('tabata.title');

  return (
  // return useObserver(() => (
    <Tab.Navigator
      screenOptions={(xx) => {

        console.log('!!!', { xx });

        return {
          // title: hz,
        };
      }}
    >
      <Tab.Screen
        name="Stopwatch"
        component={screens.Stopwatch}
        initialParams={{ asd: 111 }}
        options={() => {
          return {
            title: titleStopwatch,
            tabBarIcon: ({ color }: tabBarIconProps) => (
              <Icon type="Entypo" name="stopwatch" style={[sg.fS25, { color }]} />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Tabata"
        component={screens.TabataTimer}
        options={{
          title: titleTabata,
          tabBarIcon: ({ color }: tabBarIconProps) => (
            <Icon name="ios-timer" style={[sg.fS25, { color }]} />
          ),
        }}
      />
    </Tab.Navigator>
  );
});

const RenderTitle = (props) => {
//   const hz = NavigationService.getCurrentRoute();
// console.log('!!!HEADER', { props }, hz);

  return (
    <ModalDropdown
      options={['111', '222']}
    />
  );
};

export const Root = (props) => {
  const { settings: { trans } } = useStores();



  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TimersTab"
        component={() => <TimersTab />}
        initialParams={{ aaa: 'aaaa' }}
        options={({ route }) => {
          const { params, state } = route;

          console.log('!!!OPTIONS', { route, state }, params);

          const hzhz = NavigationService.getCurrentRoute(state);
          // const hzhz = hz();
          console.log('!!!CURREBT', hzhz);

          return {
            title: trans('stopwatch'),
            headerLeft: () => (
              <TouchableOpacity onPress={() => NavigationService.navigate(routeNames.SETTINGS)}>
                <Icon name="md-settings" style={[sg.pL10, sg.fS25]} />
              </TouchableOpacity>
            ),
            headerTitle: (props) => <RenderTitle {...props} />,
            // ...options,
          };
        }}
      />
      <Stack.Screen
        name={routeNames.SETTINGS}
        component={screens.Settings}
        options={{
          title: trans(('settings.title')),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name={routeNames.TABATA_LIST}
        component={screens.TabataList}
        options={{
          title: trans(('tabata.titleList')),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

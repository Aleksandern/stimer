import {
  YellowBox,
} from 'react-native';
import 'react-native-gesture-handler';

import App from './src/Containers/RootContainer';

export default App;

YellowBox.ignoreWarnings([
  'componentWillReceiveProps',
  'Looks like you\'re passing an inline function for \'component\' prop for the screen \'TimersTab\'',
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation',
]);


import { StyleSheet } from 'react-native';

import {
  createStyle,
  cls,
} from 'src/Styles';

export default createStyle({
  container: {
    alignSelf: 'center',
  },
  spinnerContainer: {
    position: 'absolute',
    transform: [{ rotate: '90deg' }],
  },
  timeContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  debugContainer: {
    position: 'absolute',
  },
  debugLine1: {
    position: 'absolute',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: cls.red,
    width: 0.1,
    height: '100%',
    alignSelf: 'center',
  },
  get debugLine2() {
    return {
      ...this.debugLine1,
      borderColor: cls.yellow,
      transform: [{
        rotate: '350deg',
      }],
    };
  },
});

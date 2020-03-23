import {
  Dimensions,
  Platform,
} from 'react-native';

export default {
  screenWidth() {
    return Dimensions.get('window').width;
  },

  screenHeight() {
    return Dimensions.get('window').height;
  },

  screenAspectRatio() {
    return this.screenWidth() / this.screenHeight();
  },

  isiPhoneX() {
    const dimen = Dimensions.get('window');

    return (
      Platform.OS === 'ios'
      && !Platform.isPad
      && !Platform.isTVOS
      && (
        dimen.height === 812
        || dimen.width === 812
        || dimen.height === 896
        || dimen.width === 896
      )
    );
  },
};

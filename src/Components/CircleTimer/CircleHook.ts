
import {
  useState,
} from 'react';
import {
  Animated,
  Easing,
} from 'react-native';
import Svg, {
  Circle,
} from 'react-native-svg';

interface propTypes {
  radius?: number,
  duration?: number,
  animation?: boolean,
}

export default ({
  radius = 15,
  duration = 1000,
  animation = true,
}: propTypes) => {
  const circumference = 2 * Math.PI * radius;
  const [dashOffset] = useState(new Animated.Value(0));
  const [spinValue] = useState(new Animated.Value(0));

  function StartImageRotate(secondInp = 0) {
    const second = secondInp / 60;
    dashOffset.setValue(second);
  }

  function setTotate(secondInp: number) {
    const second = secondInp / 60;

    if (secondInp === 0) {
      dashOffset.setValue(0);

      return;
    }

    Animated.timing(dashOffset, {
      toValue: second,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }

  function setSpinner(secondsInp: number) {
    let secondCorrect = secondsInp;
    let durationLocal = duration;

    if (!animation) {
      spinValue.setValue(secondCorrect);
      return;
    }

    if (secondCorrect === 0) {
      return;
    }

    if (secondCorrect === 1) {
      spinValue.setValue(0);
    }

    if (secondCorrect === 59) {
      secondCorrect = 59.99999999999;
      durationLocal = duration + duration;
    }

    Animated.timing(
      spinValue,
      {
        toValue: secondCorrect,
        duration: durationLocal,
        easing: Easing.linear,
        useNativeDriver: true,
      },
    ).start();
  }

  // useEffect(() => {
  //   StartImageRotate();
  // }, []);

  const RotateData = dashOffset.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  const spinData = spinValue.interpolate({
    inputRange: [0, 60],
    outputRange: ['0deg', '360deg'],
  });


  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);
  return {
    RotateData,
    circumference,
    AnimatedCircle,
    StartImageRotate,
    setTotate,
    spinData,
    setSpinner,
    AnimatedSvg,
  };
};

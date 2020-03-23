
import React, {
  Component,
  useEffect,
  useState,
  useRef,
} from 'react';
import {
  View,
  Text,
  LayoutChangeEvent,
} from 'react-native';
import Svg, {
  Circle,
  LinearGradient,
  Defs,
  Stop,
} from 'react-native-svg';

import {
  sg,
} from 'src/Styles';

import CircleHook from './CircleHook';
import StopwatchHook from './StopwatchHook';
import Gradient from './GradientCircleTimer';

import styles from './styles';

interface propTypes {
  radius?: number,
  strokeWidth?: number,
  fillColor?: string,
  strokeColor?: string,
  strokeBgColor?: string,
  start?: boolean,
  startTime?: number,
  debug?: boolean,
  onLayout?: (e: LayoutChangeEvent) => void,
}

const CircleComp = ({
  radius = 100,
  strokeWidth = 10,
  fillColor = 'transparent',
  strokeColor = 'lightblue',
  strokeBgColor = 'lightgrey',
  start = false,
  startTime = 0,
  debug = false,
  onLayout = () => null,
}: propTypes) => {
  const {
    setSpinner,
    circumference,
    spinData,
    AnimatedSvg,
  } = CircleHook({
    radius,
    animation: false,
  });

  // const formatted = '123';
  // const msecs = seconds;
  const {
    msecs,
    parsedTime: {
      formatted,
      seconds,
      minutes,
    },
  } = StopwatchHook({
    startTime,
    start,
  });

  const hideBlockCurve = (seconds >= 30) || (minutes >= 1);
  // const hideBlockCurve = true;
  // setTotate(seconds);
  setSpinner(seconds);

  useEffect(() => {
  }, []);

  const width = radius * 2 + strokeWidth * 2;
  const height = radius * 2 + strokeWidth * 2;

  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
        },
      ]}
      onLayout={onLayout}
    >
      <Svg
        width={width}
        height={height}
      >

        <Circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          fill="darkgray"
          strokeWidth={strokeWidth}
          stroke={strokeBgColor}
        />

        {/* <AnimatedCircle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          fill={fillColor}
          strokeDasharray={circumference}
          strokeWidth={strokeWidth}
          strokeDashoffset={RotateData}
          // strokeDashoffset={RotateData}
          // strokeDashoffset={1}
          // stroke={strokeColor}
          stroke="url(#gradient)"
        /> */}

        {/* <Circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          fill={fillColor}
          strokeDasharray={circumference}
          strokeWidth={strokeWidth}
          strokeDashoffset={circumference / 2}
          stroke="url(#gradient)"
          style={{ zIndex: 1000 }}
          // style={{ transform: [{ rotate: '-90deg' }] }}
        /> */}

        {/* Circle for creating stroke outline effect */}
        {/* <Circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius - strokeWidth / 2}
          fill={fillColor}
        /> */}
      </Svg>

      <View
        style={styles.spinnerContainer}
      >
        <AnimatedSvg
          width={width}
          height={height}
          style={{
            transform: [{ rotate: spinData }],
          }}
        >
          <Gradient />

          <Circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            fill={fillColor}
            strokeDasharray={circumference}
            strokeWidth={strokeWidth}
            strokeDashoffset={circumference / 2}
            stroke="url(#gradient)"
            // strokeLinecap="round"
          />
        </AnimatedSvg>
      </View>

      {debug && (
        <View style={[styles.debugContainer, { width, height }]}>
          <View style={styles.debugLine1} />
          <View style={styles.debugLine2} />
        </View>
      )}

      {!hideBlockCurve && (
        <Svg
          width={width}
          height={height}
          style={{
            transform: [{ rotate: '110deg' }],
            ...sg.absolute,
          }}
        >
          <Circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            fill={fillColor}
            strokeDasharray={circumference}
            strokeWidth={strokeWidth}
            strokeDashoffset={circumference / 1.8}
            stroke={strokeBgColor}
          />
        </Svg>
      )}

      <View style={styles.timeContainer}>
        {/* <Text>{msecs}</Text> */}
        <Text>{formatted}</Text>
      </View>
    </View>
  );
};
// };

// function withMyHook(Component) {
//   return function WrappedComponent(props) {
//     const myHookValue = CircleHook({
//       radius,
//       duration,
//     });

//     return <Component {...props} myHookValue={myHookValue} />;
//   };
// }


// export default withMyHook(CircleComp);

export default CircleComp;

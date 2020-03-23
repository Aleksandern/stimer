import React from 'react';

import {
  LinearGradient,
  Defs,
  Stop,
} from 'react-native-svg';

export default () => (
  <Defs key="gradient">
    <LinearGradient
      id="gradient"
      x1="100%"
      y1="0%"
      x2="0%"
      y2="0%"
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset="25%" stopColor="lightgray" />
      <Stop offset="80%" stopColor="lightgreen" />
      <Stop offset="100%" stopColor="green" />
    </LinearGradient>
  </Defs>
);

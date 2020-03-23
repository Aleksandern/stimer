
import React from 'react';
import {
  Button,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  return (
    <Button
      onPress={() => {
        navigation.navigate('Settings');
        console.log('!!!hhh', {  });
      }}
      title="example hook"
    />
  );
};

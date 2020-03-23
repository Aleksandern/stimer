import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import { View, Text, Button } from 'react-native';
import {
  View,
  Text,
  Button,
} from 'react-native';

import { RootStore } from 'src/Store';

import Example from 'src/Components/Example';

import {
  NavigationService,
} from 'src/Navigation';

@observer
class Home extends Component {
  async onPress() {
    // const MainStore = useStores();
    // console.log('!!!', { }, MainStore.openTodos.length);

    console.log('!!111');
    // await RootStore.navigation.addTodo(4);

    console.log('!!222');

    // const hz = RootStore.navigation.getList.length;
    // console.log('!!!: Home -> onPress -> hz', hz);
    // console.log('!!!', this.props);
  }

  navig() {
    console.log('!!!', {  }, this.props);
    this.props.navigation.navigate('Settings');
  }

  render() {
    console.log('!!!props', {  }, this.props);
    // console.log('!!!', { }, MainStore.openTodos.length);
    // console.log('!!!rr', { }, RootStore.navigation.getList.length);
    // const navigation = useNavigation();

    return (
      <View>
        <Text>111</Text>
        <Text>222</Text>
        <Text>333</Text>
        <Button
          title="add"
          onPress={() => {
            NavigationService.navigate('Settings');
            // this.onPress();
            // useNavigation().navigate('Settings');
            // MainStore.addTodo(3);
          }}
        />
        <Button
          title="example"
          onPress={() => {
            Example.show();
          }}
        />
        <Button
          title="sett"
          onPress={() => {
            this.navig();
          }}
        />
      </View>
    );
  }
}

export default Home;

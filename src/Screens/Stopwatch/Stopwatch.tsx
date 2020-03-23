
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action, computed } from 'mobx';
import {
  View,
  FlatList,
} from 'react-native';
import {
  Text,
  Icon,
  Content,
  Button,
  Row,
  View as ViewNB,
} from 'native-base';

import {
  RootStore,
} from 'src/Store';

import CircleTimer from 'src/Components/CircleTimer';

import {
  sg,
  cs,
} from 'src/Styles';

interface hzhz {
  [key: string]: number,
}

const { settings } = RootStore;

@observer
class Stopwatch extends Component {
  @observable laps = [
    7039,
    11039,
    12039,
    13039,
    14039,
    15039,
    16039,
    17039,
    18039,
    19039,
    21039,
    22039,
    23039,
    24039,
    25039,
    26039,
  ];

  @observable heights: hzhz = {
    stopwatch: 0,
    buttons: 0,
    content: 0,
  };

  @action
  setHeight(height: number, key: string) {
    if (this.heights[key] !== height) {
      this.heights[key] = height;
    }
  }

  @computed
  get getLocale() {
    return this.heights.buttons;
  }

  renderButtons() {
    return (
      <ViewNB
        padder
        style={[sg.row, sg.pT0]}
        onLayout={(e) => {
          const { height } = e.nativeEvent.layout;

          this.setHeight(height, 'buttons');
        }}
      >
        <Button style={[sg.flex, sg.mR5]} icon block>
          <Icon type="FontAwesome" name="play" />
        </Button>

        <Button style={sg.flex} block>
          <Icon type="FontAwesome" name="stop" />
        </Button>
      </ViewNB>
    );
  }

  renderLaps() {
    let listHeight;
    const { heights: { stopwatch, buttons, content } } = this;
    const heightsAdd = [
      40, // laps title
      40,
      cs.contentPadding,
    ].reduce((acc, val) => (acc + val), 0);

    if (stopwatch && buttons && content) {
      if ((content) <= (stopwatch + buttons + heightsAdd)) {
        listHeight = 150;
      } else {
        listHeight = (content - (stopwatch + buttons) - heightsAdd);
      }
    }

    if (!listHeight) {
      return null;
    }

    return (
      <View style={[sg.mT10]}>
        <ViewNB style={[sg.row, sg.aICenter, sg.jCSpaceBetween, sg.mB0, sg.height40]} padder>
          <Text>Laps</Text>
          <Button transparent bordered small>
            <Icon name="md-stopwatch" style={sg.fS18} />
          </Button>
        </ViewNB>

        <FlatList
          keyExtractor={(item, index) => index.toString()}
          style={[{ height: listHeight }, sg.pHContent]}
          // style={}
          nestedScrollEnabled
          data={this.laps}
          renderItem={({ item, index }) => (
            <Row
              style={sg.jCSpaceBetween}
              key={item}
            >
              <Text>{index + 1}</Text>
              <Text>{item}</Text>
            </Row>
          )}
        />
      </View>
    );
  }

  render() {
    const { isLockScreen } = settings;

    return (
      <Content
        contentContainerStyle={[sg.flexGrow]}
        bounces={false}
        onLayout={(e) => {
          const { height } = e.nativeEvent.layout;
          this.setHeight(height, 'content');
        }}
      >
        <View style={[sg.jCSpaceBetween, sg.flex, sg.pVContent]}>
          <View style={[]}>
            <CircleTimer
              onLayout={(e) => {
                const { height } = e.nativeEvent.layout;
                this.setHeight(height, 'stopwatch');
              }}
            />

            {this.renderLaps()}
          </View>

          {this.renderButtons()}
        </View>
      </Content>
    );
  }
}

export default Stopwatch;

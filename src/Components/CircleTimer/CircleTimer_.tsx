
import React, { Component, useEffect, useState } from 'react';
import {
  observer,
  useObserver,
} from 'mobx-react';
import {
  observable,
  computed,
  autorun,
  action,
} from 'mobx';
import {
  View,
  Animated,
} from 'react-native';
import {
  Button,
  Text,
} from 'native-base';

// import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

import {
  Stopwatch,
  Timer,
} from 'src/Components/StopwatchTimer';

import {
  sg,
} from 'src/Styles';

import Circle from './Circle';

@observer
class CircleTimer extends React.PureComponent {
  @observable minutes = 0;

  @observable seconds = 0;

  @observable startCircle = false;

  @observable startTimeCircle = 7039;
  // @observable startTimeCircle = 0;

  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
    };

    this.minutesThis = 0;
    this.secondsThis = 0;
  }


  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     // console.log('!!!', {  }, this.minutesThis, '=', this.secondsThis);

  //     if (this.minutes !== this.minutesThis) {
  //       this.minutes = this.minutesThis;
  //     }

  //     if (this.seconds !== this.secondsThis) {
  //       this.seconds = this.secondsThis;
  //     }

  //   }, 100);
  // }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  setMinutes(hz) {
    this.minutes = hz;
  }

  @computed
  get getMinutes() {
    return this.minutes;
  }


  @computed
  get getSeconds() {
    return this.seconds;
  }

  // @action
  setTime = (time: string) => {
    const [minutes, seconds] = time.split(':');
    const secondsFormated = parseInt(seconds, 10);
    const minutesFormated = parseInt(minutes, 10);

    if (this.secondsThis !== secondsFormated) {
      this.secondsThis = secondsFormated;
      // console.log('!!!', { secondsFormated });
    }

    if (this.minutesThis !== minutesFormated) {
      this.minutesThis = minutesFormated;
      // console.log('!!!', { minutesFormated });
    }

    // console.log('!!!', { secondsFormated });
    // console.log('!!!', minute);
    // console.log('!!!', { time });
    // this.seconds = (parseInt(seconds, 10));

    // if (this.seconds !== secondsFormated) {
    //   this.seconds = secondsFormated;
    // }

    // console.log('!!!111', { secondsFormated }, this.state.seconds);

    // if (secondsFormated === this.state.seconds) {
    //   return;
    // }

    // if (secondsFormated === this.seconds) {
    //   return;
    // }

    // if ( secondsFormated % 4 !== 0 ) {
    //   return;
    // }

    // console.log('!!!222', { secondsFormated }, this.seconds);

    // this.seconds = secondsFormated;

    // this.setState({
    //   seconds: secondsFormated,
    // });
  }

  renderCircle() {
    // console.log('!!!', { sec });
    const sec = this.seconds;
    // console.log('!!!: CircleTimer -> renderCircle -> sec', sec);

    return (
      <Circle
        // seconds={sec}
        // minutes={this.minutes}
        start={this.startCircle}
        startTime={this.startTimeCircle}
        // debug
        // seconds={this.seconds}
        // seconds={this.state.seconds}
      />
    );
  }


  render() {
    // const { RotateData, circumference, AnimatedCircle } = useCircularTimer({
    //   radius,
    //   duration,
    // });

    // const hz = new Date();
    // console.log('!!!', { hz });
    // console.log('!!!minutes', {  }, this.minutes);
    // console.log('!!!minutes', {  });

    return (
      <View>

        {/* <Stopwatch
          // laps
          msecs
          start
          // reset={this.state.stopwatchReset}
          // options={options}
          getTime={this.setTime}
          // getTime={(time) => {
          //   const [minutes, seconds] = time.split(':');
          //   this.setSeconds(seconds);

          // }}
          getMsecs={(msec) => {
            console.log('!!!', { msec });
          }}
        /> */}

        {/* <Timer
          totalDuration={90000}
          msecs
          start={false}
          // reset={this.state.timerReset}
          // options={options}
          // handleFinish={handleTimerComplete}
          // getTime={this.getFormattedTime}
        /> */}

        {this.renderCircle()}


{/*     <View style={[sg.row]}>
          <Button
            block
            // vertical
            // full
            style={sg.mR10}
            onPress={() => {
              this.startCircle = true;
            }}
          >
            <Text>Start</Text>
          </Button>
          <Button
            block
            // full
            onPress={() => {
              this.startCircle = false;
            }}
          >
            <Text>Stop</Text>
          </Button>

          <Button
            onPress={() => {
              this.startCircle = false;
            }}
          >
            <Text>Reset</Text>
          </Button>
        </View> */}

        {/* <View style={[sg.row, sg.mV15]}>
          <Button
            block
            // vertical
            // full
            style={sg.mR10}
            onPress={() => {
              this.startTimeCircle = 20;
            }}
          >
            <Text>Set Start Time</Text>
          </Button>
          <Button
            block
            // full
            onPress={() => {
              this.startTimeCircle = 0;
            }}
          >
            <Text>Unset Start Time</Text>
          </Button>
        </View> */}


      </View>
    );
  }
}

export default CircleTimer;

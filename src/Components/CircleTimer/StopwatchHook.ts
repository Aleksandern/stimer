
import React, {
  Component,
  useEffect,
  useState,
  useReducer,
  useCallback,
  useRef,
} from 'react';

import reducerUtils, {
  actionHandlersTS,
  actionCreatorsTS,
  actionCreatorTS,
  createActionTS,
} from 'src/Utils/reducerUtils';

import {
  parseUnixTime,
} from 'src/Utils/helpers';

interface initialStateTS {
  startTime: number,
  stopTime: number,
  started: number,
  pausedTime: number,
  elapsed: number,
}

const initialState: initialStateTS = {
  startTime: 0,
  stopTime: 0,
  started: 0,
  pausedTime: 0,
  elapsed: 0,
};

const actionTypes = {
  SET_START_TIME: 'SET_START_TIME',
  SET_STOP_TIME: 'SET_STOP_TIME',
  SET_PAUSED_TIME: 'SET_PAUSED_TIME',
  SET_ELAPSED_TIME: 'SET_ELAPSED_TIME',
};

const ACTION_HANDLERS: actionHandlersTS<initialStateTS> = {
  [actionTypes.SET_START_TIME]: (state, { payload }) => ({
    ...state,
    startTime: payload,
  }),
  [actionTypes.SET_STOP_TIME]: (state, { payload }) => ({
    ...state,
    stopTime: payload,
  }),
  [actionTypes.SET_PAUSED_TIME]: (state, { payload }) => ({
    ...state,
    pausedTime: payload,
  }),
  [actionTypes.SET_ELAPSED_TIME]: (state) => {
    const { startTime } = state;
    const elapsed = +new Date() - startTime;

    return {
      ...state,
      elapsed,
    };
  },
};

const actionCreators = createActionTS({
  setStartTime: (data) => reducerUtils.createAction(actionTypes.SET_START_TIME, data),
  setStopTime: (data) => reducerUtils.createAction(actionTypes.SET_STOP_TIME, data),
  setPausedTime: (data) => reducerUtils.createAction(actionTypes.SET_PAUSED_TIME, data),
  setElapsedTime: (data) => reducerUtils.createAction(actionTypes.SET_ELAPSED_TIME, data),
});

const reducer = reducerUtils.createReducer<initialStateTS>(initialState, ACTION_HANDLERS);

export default ({
  startTime = 0,
  start = false,
  laps = false,
}) => {
  const interval = useRef<any>();
  const initState = {
    ...initialState,
    startTime,
    elapsed: startTime || 0,
  };
  const [state, dispatch] = useReducer(reducer, initState);
  const {
    stopTime,
    pausedTime,
    elapsed,
  } = state;

  const stopF = () => {
    console.log('!!!stop', {  });

    if (interval.current) {
      clearInterval(interval.current);
      interval.current = undefined;
    }

    // setStarted(false);
  };

  const resetF = () => {
    dispatch(actionCreators.setElapsedTime(startTime));
    dispatch(actionCreators.setStartTime(0));
    dispatch(actionCreators.setStopTime(0));
    dispatch(actionCreators.setPausedTime(0));
  };

  useEffect(() => {
    function startF() {
      if (laps && elapsed) {
        const lap = +new Date() - stopTime;

        dispatch(actionCreators.setStopTime(0));
        dispatch(actionCreators.setPausedTime(pausedTime + lap));
      }

      const startTimeCalcCalc = elapsed ? (+new Date() - elapsed) : +new Date();

      dispatch(actionCreators.setStartTime(startTimeCalcCalc));
      // setStarted(true);

      if (!interval.current) {
        interval.current = setInterval(() => {
          dispatch(actionCreators.setElapsedTime());
          console.log('!!!TTTT', { });
        }, 150);
      }
    }

    if (start) {
      startF();
    }

    return () => {
      stopF();
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  return {
    parsedTime: parseUnixTime(elapsed, true),
    msecs: elapsed,
  };
};

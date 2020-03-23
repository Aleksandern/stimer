import { useEffect, useRef } from 'react';
import { useHeaderHeight } from '@react-navigation/stack';

export const useInterval = (callback: Function, delay: number) => {
  const savedCallback = useRef<any>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return () => null;
  }, [delay]);
};

export const useVariable = (initialValue: any) => {
  const ref = useRef(initialValue);

  return [
    ref,
    (newValue: any) => {
      ref.current = newValue;
    }];
};

export const getHeaderHeight = useHeaderHeight;

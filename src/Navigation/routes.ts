
import { ReactComponentElement, Component, ComponentType } from 'react';

import * as screens from 'src/Screens';

type route = {
  name: string,
  title?: string,
  component: ComponentType,
};

const timersTabRoute: route[] = [
  {
    name: '123',
    component: screens.Stopwatch,
  },
];

export {
  timersTabRoute,
};

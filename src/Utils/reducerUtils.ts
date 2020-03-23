
export type stateTS = {};

export interface actionTS {
  type: string,
  payload?: any,
}

export interface actionTypesTS {
  [key: string]: string,
}

export type actionHandlersTS<T extends stateTS> = {
  [key: string]: (state: T, action: actionTS) => T
};

export type actionCreatorValueTS = (data?: any) => actionTS;

export type actionCreatorsTS<T> = {
  [P in keyof T]: actionCreatorValueTS
};

export function createActionTS<T extends actionCreatorsTS<T>>(arg: actionCreatorsTS<T>): actionCreatorsTS<T> {
  return arg;
}

export default {
  createAction(type: string, payload?: object): actionTS {
    return {
      type,
      payload,
    };
  },

  createReducer<T extends stateTS>(initialState: T, ACTION_HANDLERS: actionHandlersTS<T>) {
    const res = (state = initialState, action: actionTS) => {
      const handler = ACTION_HANDLERS[action.type];

      return handler ? handler(state, action) : state;
    };

    return res;
  },
};

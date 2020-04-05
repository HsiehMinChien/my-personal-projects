import { createStore } from "redux";

const initialState = {
  lastUpdate: 0,
  light: false,
  data: {}
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TICK":
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light
      };
    case "ALL_DATA":
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export const initializeStore = (preloadedState = initialState) => {
  return createStore(reducer, preloadedState);
};

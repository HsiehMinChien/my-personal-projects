import { shallow } from "enzyme";
import React from "react";

import Clock from "../components/clock";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("With Enzyme", () => {
  const initialState = { lastUpdate: 0, light: false };
  const mockStore = configureStore();
  let store;

  it("Clock component first test", () => {
    store = mockStore(initialState);
    const clock = shallow(
      <Provider store={store}>
        <Clock />
      </Provider>
    );
    expect(clock.props().children).toEqual(<Clock />);
    expect(clock).toMatchSnapshot();
  });
});

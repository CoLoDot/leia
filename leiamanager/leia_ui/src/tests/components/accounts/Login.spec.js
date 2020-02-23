import React from "react";
import { Provider } from "react-redux";
import Enzyme, { shallow } from "enzyme";
import Login from "../../../components/accounts/Login";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("Login component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      myState: "sample text"
    });
  });
  it("should render Login component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Login isAuthenticated={true} />
      </Provider>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper.find("Login")).toBe(true);
  });
});

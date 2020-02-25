import React from "react";
import { shallow } from "enzyme";
import { Login } from "../../../components/accounts/Login";
import _ from "lodash";

describe("Login component", () => {
  it("should render Login component", () => {
    const wrapper = shallow(<Login userLogin={_.noop} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find("h4").text()).toEqual("Login");
    expect(
      wrapper
        .find("label")
        .at(0)
        .text()
    ).toEqual("Username");
    expect(
      wrapper
        .find("label")
        .at(1)
        .text()
    ).toEqual("Password");
  });
});

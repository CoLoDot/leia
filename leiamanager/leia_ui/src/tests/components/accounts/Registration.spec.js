import React from "react";
import { shallow } from "enzyme";
import { Registration } from "../../../components/accounts/Registration";
import _ from "lodash";

describe("Registration component", () => {
  it("should render Registration component", () => {
    const wrapper = shallow(<Registration userRegistration={_.noop} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find("h4").text()).toEqual("Create account");
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
    ).toEqual("Email");
  });
});

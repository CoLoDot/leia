import React from "react";
import { shallow } from "enzyme";
import { PrivateRoute } from "../../../components/commons/PrivateRoute";
import { Login } from "../../../components/accounts/Login";
import _ from "lodash";

describe("Private route", () => {
  it("should render privateroute", () => {
    const wrapper = shallow(<PrivateRoute component={<Login />} />);
  });
});

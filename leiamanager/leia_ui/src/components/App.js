import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";

import Header from "./layout/Header";
import Dashboad from "./leaders/Dashboard";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="container">
            <Dashboad />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));

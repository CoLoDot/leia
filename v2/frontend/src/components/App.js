/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './layout/Header';
import Home from './Home/Home';
import Alerts from './layout/Alerts';
import store from '../store';

// Alerting options
const alertingOptions = {
  timeout: 3000,
  position: 'bottom center',
  transition: 'scale',
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertingOptions}>
          <Router>
            <>
              <Header />
              <Alerts />
              <div className="container">
                <Route exact path="/" component={Home} />
              </div>
            </>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;

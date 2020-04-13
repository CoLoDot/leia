/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './layout/Header';
import Home from './Home/Home';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
              <Header />
              <div className="container">
                <Route exact path="/" component={Home} />
              </div>
          </Router>
      </Provider>
    );
  }
}

export default App;

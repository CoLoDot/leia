import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Home extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="card card-body mt-4 mb-4 text-center">
        <h4>Welcome to Leia</h4>
        <ul className="nav justify-content-center">
          <Router>
            <li className="nav-item">
              <Link to="/registration">
                <Button variant="contained" color="primary">
                  Create an account
                </Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </Link>
            </li>
          </Router>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);

import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import GridList from "../GridList/GridList";

export class Home extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="container text-center mt-4">
        <h4>Welcome to Leia</h4>
        <SearchBar />
        <h4>or</h4>
        <ul className="list-group list-group-horizontal justify-content-center">
          <Router>
            <li className="list-group-item border-0">
              <Link to="/registration">
                <Button variant="contained" color="primary">
                  Create an account
                </Button>
              </Link>
            </li>
          </Router>
        </ul>
        <GridList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);

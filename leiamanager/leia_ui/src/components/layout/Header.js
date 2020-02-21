import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userLogout } from "../../actions/auth";
import Button from "@material-ui/core/Button";
import _ from "lodash";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    userLogout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Leia
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {isAuthenticated ? (
              <ul className="navbar-nav ml-auto mt-2-mt-lg-0">
                <span className="navbar-text mr-3">
                  <strong>
                    {user ? `Welcome ${_.upperFirst(user.username)}` : ""}
                  </strong>
                </span>
                <li className="nav-item">
                  <Button
                    variant="contained"
                    onClick={this.props.userLogout}
                    className="nav-link"
                  >
                    Logout
                  </Button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto mt-2-mt-lg-0">
                <li className="nav-item">
                  <Link to="/registration" className="nav-link">
                    Create account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.Auth
});

export default connect(mapStateToProps, { userLogout })(Header);

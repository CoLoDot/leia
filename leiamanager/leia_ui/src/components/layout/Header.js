import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userLogout } from "../../actions/auth";
import _ from "lodash";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    userLogout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h4" style={{ flex: 1 }}>
            leia
          </Typography>
          {isAuthenticated ? (
            <Toolbar>
              <Typography style={{ marginRight: "10px" }}>
                {user ? `Welcome ${_.upperFirst(user.username)}` : ""}
              </Typography>
              <Link to="/">
                <Button variant="contained" onClick={this.props.userLogout}>
                  Logout
                </Button>
              </Link>
            </Toolbar>
          ) : (
            <Toolbar>
              <Link to="/registration">
                <Button variant="contained" style={{ marginRight: "10px" }}>
                  Create account
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="contained">Login</Button>
              </Link>
            </Toolbar>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.Auth
});

export default connect(mapStateToProps, { userLogout })(Header);

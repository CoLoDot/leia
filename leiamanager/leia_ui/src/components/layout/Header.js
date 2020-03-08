import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userLogout } from "../../actions/auth";
import Button from "@material-ui/core/Button";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";

import { pink } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  button: {
    color: pink
  },
  sectionDesktop: {
    display: "flex-end",
    [theme.breakpoints.up("md")]: {
      display: "flex-end"
    }
  }
}));

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    userLogout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <div className={useStyles.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={useStyles.title}
              variant="h6"
              noWrap
              style={{ flex: 1 }}
            >
              Leia
            </Typography>
            <div className={useStyles.sectionDesktop}>
              {isAuthenticated ? (
                <Toolbar>
                  <Typography className={useStyles.title} variant="h6" noWrap>
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
                    <Button className={useStyles.button}>Create account</Button>
                  </Link>
                  <Link to="/login">
                    <Button className={useStyles.button}>Login</Button>
                  </Link>
                </Toolbar>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.Auth
});

export default connect(mapStateToProps, { userLogout })(Header);

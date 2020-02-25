import React, { Component } from "react";
import { connect, HashRouter as Router } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { useStyles } from "../../styles/Button";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import PropTypes from "prop-types";
import { userLogin } from "../../actions/auth";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    userLogin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.userLogin(username, password);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h4>Login</h4>
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              onChange={this.handleOnChange}
              value={username}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.handleOnChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <Button
              variant="contained"
              type="submit"
              className={useStyles.button}
              endIcon={<SendIcon className="action" />}
            >
              Send
            </Button>
          </div>
          <p>
            Not registered yet ?
            <Router>
              <Link to="/registration"> Create an account</Link>
            </Router>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated
});

export default connect(mapStateToProps, { userLogin })(Login);

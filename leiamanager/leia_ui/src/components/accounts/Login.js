import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "../../styles/Button";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const userToRegister = { username, password };
    //this.props.createUser(userToRegister);
    console.log(userToRegister);
  };

  render() {
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
            <Link to="/registration"> Create an account</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;

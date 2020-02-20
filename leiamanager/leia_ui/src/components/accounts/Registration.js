import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "../../styles/Button";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

export class Registration extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    const userToRegister = { username, email, password, password2 };
    //this.props.createUser(userToRegister);
    console.log(userToRegister);
  };

  render() {
    const { username, email, password, password2 } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h4>Create account</h4>
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
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.handleOnChange}
              value={email}
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
            <label>Password confirmation</label>
            <input
              className="form-control"
              type="password"
              name="password2"
              onChange={this.handleOnChange}
              value={password2}
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
            Already have an account ? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Registration;

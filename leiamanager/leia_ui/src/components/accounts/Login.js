import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    const { name, password } = this.state;
    const userToRegister = { name, password };
    //this.props.createUser(userToRegister);
    console.log(userToRegister);
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h4>Create account</h4>
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label>username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              onChange={this.handleOnChange}
              value={username}
            />
          </div>

          <div className="form-group">
            <label>password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.handleOnChange}
              value={password}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn ">
              {"Login "}
              <SendIcon className="action" />
            </button>
          </div>
          <p>
            Not registered yet ?
            <Link to="/registration">Create an account</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;

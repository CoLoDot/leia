import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLeaders } from "../../actions/leaders";
import SendIcon from "@material-ui/icons/Send";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  static propTypes = {
    addLeaders: PropTypes.func.isRequired
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const leaderToSend = { name, email, message };
    this.props.addLeaders(leaderToSend);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h4>Add your Star Wars Leader</h4>
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.handleOnChange}
              value={name}
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
            <label>Message</label>
            <input
              className="form-control"
              type="text"
              name="message"
              onChange={this.handleOnChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn ">
              {""}
              <SendIcon className="action" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLeaders })(Form);

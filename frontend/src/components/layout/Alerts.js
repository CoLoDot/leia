import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.message.name) {
        alert.error(`Name : ${error.message.name.join()}`);
      } else if (error.message.email) {
        alert.error(`Email : ${error.message.email.join()}`);
      } else if (error.message.non_field_errors) {
        alert.error(error.message.non_field_errors.join());
      } else if (error.message.username) {
        alert.error(error.message.username.join());
      } else if (error.message.email) {
        alert.error(error.message.email.join());
      }
    }

    if (message !== prevProps.message) {
      if (message.leaderDeleted) {
        alert.success(message.leaderDeleted);
      }
      if (message.addLeader) {
        alert.success(message.addLeader);
      }
      if (message.passwordIsNotMatching) {
        alert.error(message.passwordIsNotMatching);
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.Errors,
  message: state.Messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";

import { getLeaders, deleteLeaders } from "../../actions/leaders";

export class LeadersList extends Component {
  static propTypes = {
    leaders: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getLeaders();
  }

  render() {
    return (
      <div>
        <Fragment>
          <h2>Leaders</h2>
          <table className="table table-striped">
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Created at</th>
              <th />
            </thead>
            <tbody>
              {this.props.leaders.map(leader => (
                <tr key={leader.id}>
                  <td>{leader.id}</td>
                  <td>{leader.name}</td>
                  <td>{leader.email}</td>
                  <td>{leader.message}</td>
                  <td>{moment(`${leader.created_at}`).format("MM/DD/YYYY")}</td>
                  <td>
                    <button
                      color="action"
                      className="btn btn-sm"
                      onClick={this.props.deleteLeaders.bind(this, leader.id)}
                    >
                      {" "}
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  leaders: state.LeadersList.leaders
});

export default connect(mapStateToProps, { getLeaders, deleteLeaders })(
  LeadersList
);

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Delete from "@material-ui/icons/Delete";
import moment from "moment";

import { getLeaders } from "../../actions/leaders";

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
                    <button className="btn btn-sm">
                      <Delete color="action" />
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

export default connect(mapStateToProps, { getLeaders })(LeadersList);

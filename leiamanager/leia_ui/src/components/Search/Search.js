import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import GridList from "../GridList/GridList";

export class Search extends Component {
  state = {
    input: ""
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  handleOnChange = e => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { onChange, input } = this.state;
    return (
      <Fragment>
        <SearchBar onChange={this.handleOnChange} />
        <GridList />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated
});

export default connect(mapStateToProps)(Search);

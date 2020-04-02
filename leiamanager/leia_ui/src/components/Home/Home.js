import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import { getTaxon } from "../../actions/taxon";
import TaxonGrid from "./Grid";
import SearchBar from "./SearchBar";
import CircularIndeterminate from "./Loader";
import _ from "lodash";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taxon: new Array()
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  static propTypes = {
    taxon: PropTypes.array.isRequired,
    getTaxon: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getTaxon();
  }

  handleOnChange(value) {
    const toSet = value;
    this.setState({ taxon: toSet });
  }

  render() {
    const { taxon } = this.state;
    return (
      <Container fixed>
        {!_.isEmpty(this.props.taxon) ? (
          <SearchBar
            taxon={this.props.taxon}
            onChangeTaxon={this.handleOnChange}
          />
        ) : (
          <CircularIndeterminate />
        )}
        <TaxonGrid taxon={taxon} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  taxon: state.Taxon.taxon
});

export default connect(mapStateToProps, { getTaxon })(Home);

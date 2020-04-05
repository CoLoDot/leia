/* eslint-disable no-array-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import _ from 'lodash';
import { getTaxon } from '../../actions/taxon';
import TaxonGrid from './Grid';
import SearchBar from './SearchBar';
import CircularIndeterminate from './Loader';
import Numbers from './Numbers';

const Home = (props) => {
  useEffect(() => {
    props.getTaxon();
  }, []);

  const [taxonArray, setTaxonArray] = useState([]);
  return (
    <Container fixed>
      {!_.isEmpty(props.taxon) && <Numbers taxon={props.taxon} />}
      {!_.isEmpty(props.taxon) ? (
        <SearchBar
          taxon={props.taxon}
          onChangeTaxon={setTaxonArray}
        />
      ) : (
        <CircularIndeterminate />
      )}
      <TaxonGrid taxon={taxonArray} />
    </Container>
  );
};

Home.propTypes = {
  taxon: PropTypes.arrayOf.isRequired,
  getTaxon: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  taxon: state.Taxon.taxon,
});

const mapDispatchToProps = (dispatch) => ({ getTaxon: () => dispatch(getTaxon()) });

export default connect(mapStateToProps, mapDispatchToProps)(Home);

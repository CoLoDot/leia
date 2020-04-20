/* eslint-disable no-array-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import _ from 'lodash';
import { getTaxa } from '../../actions/taxa';
import TaxonGrid from './Grid';
import SearchBar from './SearchBar';
import CircularIndeterminate from './Loader';
import Numbers from './Numbers';
import TaxaTabs from './Tab'
const Home = (props) => {
  useEffect(() => {
    props.getTaxa();
  }, []);

  const [taxaArray, setTaxaArray] = useState([]);
  return (
    <Container fixed>
      {!_.isEmpty(props.taxa) && <Numbers taxa={props.taxa} />}
      {!_.isEmpty(props.taxa) ? (
        <SearchBar
          taxa={props.taxa}
          onChangeTaxon={setTaxaArray}
        />
      ) : (
        <CircularIndeterminate />
      )}
      <TaxaTabs taxa={taxaArray} />
    </Container>
  );
};

Home.propTypes = {
  taxa: PropTypes.arrayOf.isRequired,
  getTaxa: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  taxa: state.Taxa.taxa,
});

const mapDispatchToProps = (dispatch) => ({ getTaxa: () => dispatch(getTaxa()) });

export default connect(mapStateToProps, mapDispatchToProps)(Home);

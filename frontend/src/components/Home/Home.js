/* eslint-disable no-array-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import _ from 'lodash';
import { getTaxa } from '../../actions/taxa';
import SearchBar from './SearchBar';
import Loader from './Loader';
import Taxa from './Taxa';

const Home = (props) => {
  useEffect(() => {
    props.getTaxa();
  }, []);

  const [taxaArray, setTaxaArray] = useState([]);
  return (
    <Container fixed>
      {!_.isEmpty(props.taxa) ? (
        <SearchBar
          taxa={props.taxa}
          onChangeTaxon={setTaxaArray}
        />
      ) : (
        <Loader />
      )}
      <Taxa taxa={taxaArray} />
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

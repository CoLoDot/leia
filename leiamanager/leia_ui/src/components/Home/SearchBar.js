/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import _ from 'lodash';

const MEDIA_AVAILABLE = 'MEDIA AVAILABLE';

const displayOptions = (option) => (option.picture ? `${_.upperFirst(option.common_name || option.binomial_name)} - ${MEDIA_AVAILABLE}` : _.upperFirst(option.common_name || option.binomial_name));

const SearchBar = ({ taxon, onChangeTaxon }) => (
  <Autocomplete
    style={{ paddingTop: '20px' }}
    multiple
    id="tags-outlined"
    options={taxon}
    getOptionLabel={(option) => displayOptions(option)}
    filterSelectedOptions
    onChange={(event, value) => onChangeTaxon(value)}
    renderInput={(params) => (
      <TextField
        {...params}
        variant="outlined"
        label="Look for an exctinct specie"
        placeholder=" + "
      />
    )}
  />
);

SearchBar.propTypes = {
  taxon: PropTypes.arrayOf.isRequired,
  onChangeTaxon: PropTypes.func.isRequired,
};

export default SearchBar;

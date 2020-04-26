/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const displayOptions = (option) => _.upperFirst(option.vernacularName || option.name);

const SearchBar = ({ taxa, onChangeTaxon }) => {
  const [checkedPicture, setCheckedPicture] = useState(false);
  const [taxaArray, setWithPictureOnly] = useState(taxa);

  const toggleCheckedPicture = () => {
    setCheckedPicture((prev) => !prev);
    !checkedPicture
      ? setWithPictureOnly(_.filter(taxa, (taxon) => !_.isEmpty(taxon.picture)))
      : setWithPictureOnly(taxa);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 20,
      justifyContent: 'center',
      alignItems: ' center',
    }}
    >
      <FormControl component="fieldset">
        <FormGroup row>
          <FormControlLabel
            control={<Switch checked={checkedPicture} onChange={toggleCheckedPicture} color="primary" />}
            label="with picture"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
      <Autocomplete
        style={{ width: 650 }}
        multiple
        limitTags={2}
        id="tags-outlined"
        options={taxaArray}
        getOptionLabel={(option) => displayOptions(option)}
        filterSelectedOptions
        onChange={(event, value) => onChangeTaxon(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Search for extinct species"
            placeholder=" + "
          />
        )}
      />
    </div>
  );
};

SearchBar.propTypes = {
  taxa: PropTypes.arrayOf.isRequired,
  onChangeTaxon: PropTypes.func.isRequired,
};

export default SearchBar;

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const LeiaTaxonId = ({ leiaID }) => (
  <Typography>
    {`leia ID : ${leiaID}`}
  </Typography>
);

LeiaTaxonId.propTypes = {
  leiaID: PropTypes.number.isRequired,
};

export default LeiaTaxonId;

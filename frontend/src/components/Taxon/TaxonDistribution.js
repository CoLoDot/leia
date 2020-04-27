/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Chip } from '@material-ui/core';
import PropTypes from 'prop-types';

const TaxonDistribution = ({ distribution }) => <Chip label={distribution} />;

TaxonDistribution.propTypes = {
  distribution: PropTypes.string.isRequired,
};

export default TaxonDistribution;

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import '../../styles/Taxon.scss';

const TaxonIdentity = ({ scientificName, vernacularName }) => (
  <>
    {vernacularName && (
      <Paper
        variant="elevation"
        className="taxon-identity"
      >
        <Typography variant="caption">
          vernacular name:
        </Typography>
        <Typography>
          {vernacularName}
        </Typography>
      </Paper>
    )}
    <Paper
      variant="elevation"
      className="taxon-identity"
    >
      <Typography variant="caption">
        scientific name and taxon's author:
      </Typography>
      <Typography>
        {scientificName}
      </Typography>
    </Paper>
  </>
);

TaxonIdentity.propTypes = {
  scientificName: PropTypes.string.isRequired,
  vernacularName: PropTypes.string.isRequired,
};

export default TaxonIdentity;

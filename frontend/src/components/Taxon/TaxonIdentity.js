/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

const TaxonIdentity = ({ classes, scientificName, vernacularName }) => (
  <>
    {vernacularName && (
      <Paper
        variant="elevation"
        className={classes}
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
      className={classes}
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
  classes: PropTypes.isRequired,
  scientificName: PropTypes.string.isRequired,
  vernacularName: PropTypes.string.isRequired,
};

export default TaxonIdentity;

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const TaxonDataSources = ({ classes, gbifKey, wikidataPageId }) => (
  <div className={classes}>
    <Button variant="contained" href={wikidataPageId}>
      Wikidata
    </Button>
    <Button variant="contained" href={`https://www.gbif.org/species/${gbifKey}`}>
      GBIF
    </Button>
  </div>
);

TaxonDataSources.propTypes = {
  classes: PropTypes.isRequired,
  gbifKey: PropTypes.string.isRequired,
  wikidataPageId: PropTypes.string.isRequired,
};

export default TaxonDataSources;

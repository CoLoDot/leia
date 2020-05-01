/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import '../../styles/Taxon.scss';

const TaxonDataSources = ({ gbifKey, wikidataPageId }) => (
  <div className="taxon-datasources">
    <Button variant="contained" href={wikidataPageId} target="_blank">
      Wikidata
    </Button>
    <Button variant="contained" href={`https://www.gbif.org/species/${gbifKey}`} target="_blank">
      GBIF
    </Button>
  </div>
);

TaxonDataSources.propTypes = {
  gbifKey: PropTypes.string.isRequired,
  wikidataPageId: PropTypes.string.isRequired,
};

export default TaxonDataSources;

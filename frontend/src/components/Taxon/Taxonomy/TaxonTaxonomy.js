/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Tooltip, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import HelpIcon from '@material-ui/icons/Help';
import TaxonTaxonomyTable from './TaxonTaxonomyTable';

const Taxonomy = ({
  order,
  genus,
  phylum,
  family,
  classes,
  species,
  kingdom,
  taxonClass,
}) => (
  <div className={classes}>
    <Typography>
      Taxonomy
      <Tooltip title="In biology, taxonomy is a branch of science that encompasses the description, identification, nomenclature, and classification of organisms. (src : wikidata)" arrow>
        <HelpIcon fontSize="small" />
      </Tooltip>
    </Typography>
    <TaxonTaxonomyTable
      order={order}
      genus={genus}
      family={family}
      phylum={phylum}
      kingdom={kingdom}
      species={species}
      taxonClass={taxonClass}
    />
  </div>
);

Taxonomy.propTypes = {
  kingdom: PropTypes.string.isRequired,
  phylum: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  genus: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  taxonClass: PropTypes.string.isRequired,
  classes: PropTypes.isRequired,
};

export default Taxonomy;

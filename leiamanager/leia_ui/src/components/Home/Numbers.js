/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Badge,
  Chip,
} from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PropTypes from 'prop-types';
import _ from 'lodash';

const getNumberOfMediaAvailable = ({ taxon }) => _.size(_.filter(taxon, (taxa) => taxa.picture));

const Numbers = ({ taxon }) => (
  <div style={{
    display: 'flex', paddingTop: '20px', textAlign: 'center', justifyContent: 'space-between',
  }}
  >
    <Badge badgeContent={_.size(taxon)} max={_.size(taxon)} color="primary">
      <Chip variant="outlined" icon={<PetsIcon />} label="Taxon available in leia database" />
    </Badge>
    <Badge badgeContent={getNumberOfMediaAvailable({ taxon })} max={getNumberOfMediaAvailable({ taxon })} color="primary">
      <Chip variant="outlined" icon={<PhotoLibraryIcon />} label="Taxon's pictures available" />
    </Badge>
  </div>
);

Numbers.propTypes = {
  taxon: PropTypes.arrayOf.isRequired,
};

export default Numbers;

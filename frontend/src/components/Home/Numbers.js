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

const getNumberOfMediaAvailable = ({ taxa }) => _.size(_.filter(taxa, (taxon) => taxon.picture));

const Numbers = ({ taxa }) => (
  <div style={{
    display: 'flex', paddingTop: '20px', textAlign: 'center', justifyContent: 'space-between',
  }}
  >
    <Badge badgeContent={_.size(taxa)} max={_.size(taxa)} color="primary">
      <Chip variant="outlined" icon={<PetsIcon />} label="Taxa available in leia database" />
    </Badge>
    <Badge badgeContent={getNumberOfMediaAvailable({ taxa })} max={getNumberOfMediaAvailable({ taxa })} color="primary">
      <Chip variant="outlined" icon={<PhotoLibraryIcon />} label="Taxon's pictures available" />
    </Badge>
  </div>
);

Numbers.propTypes = {
  taxa: PropTypes.arrayOf.isRequired,
};

export default Numbers;

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@material-ui/core';

const TaxonTaxonomyTable = ({
  kingdom,
  phylum,
  order,
  family,
  genus,
  species,
  taxonClass,
}) => (
  <TableContainer component={Paper}>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>kingdom</TableCell>
          <TableCell>phylum</TableCell>
          <TableCell>order</TableCell>
          <TableCell>family</TableCell>
          <TableCell>genus</TableCell>
          <TableCell>species</TableCell>
          <TableCell>class</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableCell>{kingdom || 'no data'}</TableCell>
        <TableCell>{phylum || 'no data'}</TableCell>
        <TableCell>{order || 'no data'}</TableCell>
        <TableCell>{family || 'no data'}</TableCell>
        <TableCell>{genus || 'no data'}</TableCell>
        <TableCell>{species || 'no data'}</TableCell>
        <TableCell>{taxonClass || 'no data'}</TableCell>
      </TableBody>
    </Table>
  </TableContainer>
);

TaxonTaxonomyTable.propTypes = {
  kingdom: PropTypes.string.isRequired,
  phylum: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  genus: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  taxonClass: PropTypes.string.isRequired,
};

export default TaxonTaxonomyTable;

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    // maxWidth: 400,
  },
});

const TaxonTaxonomyTable = ({
  kingdom,
  phylum,
  order,
  family,
  genus,
  species,
  taxonClass,
}) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">
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
          <TableCell>{kingdom}</TableCell>
          <TableCell>{phylum}</TableCell>
          <TableCell>{order}</TableCell>
          <TableCell>{family}</TableCell>
          <TableCell>{genus}</TableCell>
          <TableCell>{species}</TableCell>
          <TableCell>{taxonClass}</TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TaxonTaxonomyTable.propTypes = {
  kingdom: PropTypes.string,
  phylum: PropTypes.string,
  order: PropTypes.string,
  family: PropTypes.string,
  genus: PropTypes.string,
  species: PropTypes.string,
  taxonClass: PropTypes.string,
};

export default TaxonTaxonomyTable;

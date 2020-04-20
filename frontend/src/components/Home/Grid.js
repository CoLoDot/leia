/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase, Typography, Grid } from '@material-ui/core';
import _ from 'lodash';
import VerticalLinearStepper from './Stepper';

const TaxonGrid = ({ taxon }) => <Grid
  container
  spacing={3}
  alignItems="center"
  style={{
    color: '#000000',
    padding: '0px',
    width: 'calc(100%)',
    marginLeft: '0px',
    marginTop: '10px',
    marginBottom: '15px',
  }}
>
  <Grid item xs={2}>
    <Typography variant="h6" align="center">
      {_.upperFirst(taxon.name)}
    </Typography>
  </Grid>
  {taxon.picture
    ? [<Grid
      item
      xs={4}
      style={{
        padding: '0px',
      }}
    >
      <VerticalLinearStepper
        scientificName={taxon.scientific_name}
        kingdom={taxon.kingdom}
        phylum={taxon.phylum}
        order={taxon.order}
        family={taxon.family}
        genus={taxon.genus}
        species={taxon.species}
        taxonClass={taxon.taxon_class}
        distribution={taxon.distribution}
        setOrientation="vertical"
      />
    </Grid>,
    <Grid item>
      <ButtonBase style={{ width: 200, height: 200 }}>
        <img
          style={{
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          src={taxon.picture}
          alt={taxon.name}
        />
      </ButtonBase>
    </Grid>] : (
      <Grid
        item
        xs={9}
        style={{
          padding: '0px',
        }}
      >
        <VerticalLinearStepper
          scientificName={taxon.scientific_name}
          kingdom={taxon.kingdom}
          phylum={taxon.phylum}
          order={taxon.order}
          family={taxon.family}
          genus={taxon.genus}
          species={taxon.species}
          taxonClass={taxon.taxon_class}
          distribution={taxon.distribution}
          setOrientation="horizontal"
        />
      </Grid>
    )}
</Grid>

TaxonGrid.propTypes = {
  taxa: PropTypes.arrayOf.isRequired,
};

export default TaxonGrid;

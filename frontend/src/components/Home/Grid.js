/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase, Typography, Grid } from '@material-ui/core';
import _ from 'lodash';
import VerticalLinearStepper from './Stepper';

const TaxonGrid = ({ taxon }) => (
  !_.isEmpty(taxon)
    && _.reverse(
      _.map(taxon, (taxa) => (
        <Grid
          container
          spacing={3}
          alignItems="center"
          style={{
            borderRadius: '5px',
            backgroundColor: '#3f51b5',
            color: '#FFFFFF',
            padding: '0px',
            width: 'calc(100%)',
            marginLeft: '0px',
            marginTop: '10px',
            marginBottom: '15px',
          }}
        >
          <Grid item xs={3}>
            <Typography variant="h6" align="center">
              {_.upperFirst(taxa.common_name)}
            </Typography>
          </Grid>
          {taxa.picture
            ? [<Grid
              item
              xs={6}
              style={{
                padding: '0px',
              }}
            >
              <VerticalLinearStepper
                binomialName={taxa.binomial_name}
                commonName={taxa.common_name}
                endemicOf={taxa.endemic_of}
                taxonomicRank={taxa.taxonomic_rank}
                taxonSuperior={taxa.taxon_superior}
              />
            </Grid>,
              <Grid item>
                <ButtonBase style={{ width: 280, height: 340}}>
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      maxHeight: '100%',
                    }}
                    src={taxa.picture}
                    alt={taxa.common_name}
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
                    binomialName={taxa.binomial_name}
                    commonName={taxa.common_name}
                    endemicOf={taxa.endemic_of}
                    taxonomicRank={taxa.taxonomic_rank}
                    taxonSuperior={taxa.taxon_superior}
                  />
                </Grid>
            )}
        </Grid>
      )),
    )
);

TaxonGrid.propTypes = {
  taxon: PropTypes.arrayOf.isRequired,
};

export default TaxonGrid;

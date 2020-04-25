/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';
import {
  Typography, Button, Chip, Tooltip, Dialog, Badge, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import StorageIcon from '@material-ui/icons/Storage';
import PlaceIcon from '@material-ui/icons/Place';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import TaxonTaxonomyTable from './TaxonTaxonomyTable';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  element: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px',
    alignItems: 'center',
    '& > *': { margin: theme.spacing(1) },
  },
  identity: {
    display: 'flex',
    justifyContent: 'center',
    height: '100px',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  datasources: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& > *': {
      marginRight: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(5),
    },
  },
  distribution: {
    display: 'flex',
    justifyContent: 'center',
    height: '20px',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  taxonomy: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(1),
    },
  },
  mediaCloseButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const TaxonIdentity = ({ classes, scientificName }) => (
  <Paper
    variant="elevation"
    className={classes}
  >
    <Typography>
      {scientificName}
    </Typography>
  </Paper>
);

TaxonIdentity.propTypes = {
  classes: PropTypes.isRequired,
  scientificName: PropTypes.string.isRequired,
};

const Taxonomy = ({
  kingdom,
  phylum,
  order,
  family,
  genus,
  species,
  taxonClass,
  classes,
}) => (
  <div className={classes}>
    <Typography>
      Taxonomy
      <Tooltip title="In biology, taxonomy is a branch of science that encompasses the description, identification, nomenclature, and classification of organisms. (src : wikidata)" arrow>
        <HelpIcon fontSize="small" />
      </Tooltip>
    </Typography>
    <TaxonTaxonomyTable
      kingdom={kingdom}
      phylum={phylum}
      order={order}
      family={family}
      genus={genus}
      species={species}
      taxonClass={taxonClass}
    />
  </div>
);

Taxonomy.propTypes = {
  kingdom: PropTypes.string,
  phylum: PropTypes.string,
  order: PropTypes.string,
  family: PropTypes.string,
  genus: PropTypes.string,
  species: PropTypes.string,
  taxonClass: PropTypes.string,
  classes: PropTypes.isRequired,
};
const TaxonMedia = ({ classes, name, picture }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>

        <Badge
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          badgeContent={<ZoomInIcon />}
        >
          <img
            style={{
              display: 'block',
              maxWidth: '400px',
              maxHeight: '100px',
            }}
            src={picture}
            alt={name}
          />
        </Badge>

      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {name}
          <IconButton
            aria-label="close"
            className={classes}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-slide-description">
            <img
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
              src={picture}
              alt={name}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

TaxonMedia.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  classes: PropTypes.isRequired,
};

const TaxonDistribution = ({ classes, distribution }) => <Chip label={distribution} />;

TaxonDistribution.propTypes = {
  classes: PropTypes.isRequired,
  distribution: PropTypes.string.isRequired,
};

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

const TaxonCard = ({
  taxon: {
    name,
    scientific_name,
    gbif_key,
    page_id,
    distribution,
    kingdom,
    phylum,
    order,
    family,
    genus,
    species,
    taxon_class,
    picture,
  },
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.element}>
        <ArrowForwardIosIcon />
        <TaxonIdentity
          scientificName={scientific_name}
          classes={classes.identity}
        />
        {picture && <TaxonMedia name={name} picture={picture} classes={classes.mediaCloseButton} />}
      </div>
      {distribution && (
        <div className={classes.element}>
          <PlaceIcon />
          <TaxonDistribution
            distribution={distribution}
            classes={classes.distribution}
          />
        </div>
      )}
      <div className={classes.element}>
        <InfoIcon />
        <Taxonomy
          kingdom={kingdom}
          phylum={phylum}
          order={order}
          family={family}
          genus={genus}
          species={species}
          taxonClass={taxon_class}
          classes={classes.taxonomy}
        />
      </div>
      <div className={classes.element}>
        <StorageIcon />
        <TaxonDataSources
          gbifKey={gbif_key}
          wikidataPageId={page_id}
          classes={classes.datasources}
        />
      </div>
    </div>
  );
};

TaxonCard.propTypes = {
  taxon: PropTypes.objectOf.isRequired,
};

export default TaxonCard;

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import PropTypes from 'prop-types'; import StorageIcon from '@material-ui/icons/Storage';
import PlaceIcon from '@material-ui/icons/Place';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import InfoIcon from '@material-ui/icons/Info';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import LeiaTaxonId from './LeiaTaxonId';
import TaxonDataSources from './TaxonDataSources';
import TaxonIdentity from './TaxonIdentity';
import Taxonomy from './Taxonomy/TaxonTaxonomy';
import TaxonMedia from './TaxonMedia';
import TaxonDistribution from './TaxonDistribution';

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
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100px',
    width: 'max-content',
    alignItems: 'left',
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
  taxonomy: {
    display: 'flex',
    flexDirection: 'column',
    width: '-webkit-fill-available',
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
  global: {
    display: 'flex',
    flexDirection: 'row',
  },
}));


const TaxonCard = ({
  taxon: {
    id,
    name,
    order,
    genus,
    family,
    phylum,
    kingdom,
    species,
    picture,
    gbifKey,
    taxonClass,
    distribution,
    wikidataPageID,
    vernacularName,
    scientificName,
  },
}) => {
  const classes = useStyles();
  return (
    <div className={classes.global}>
      {picture && <TaxonMedia name={name} picture={picture} classes={classes.mediaCloseButton} />}
      <div className={classes.root}>
        <div className={classes.element}>
          <FingerprintIcon />
          <LeiaTaxonId leiaID={id} />
        </div>
        <div className={classes.element}>
          <ArrowForwardIosIcon />
          <TaxonIdentity
            scientificName={scientificName}
            vernacularName={vernacularName}
            classes={classes.identity}
          />
        </div>
        {distribution && (
        <div className={classes.element}>
          <PlaceIcon />
          <TaxonDistribution
            distribution={distribution}
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
            taxonClass={taxonClass}
            classes={classes.taxonomy}
          />
        </div>
        <div className={classes.element}>
          <StorageIcon />
          <TaxonDataSources
            gbifKey={gbifKey}
            wikidataPageId={wikidataPageID}
            classes={classes.datasources}
          />
        </div>
      </div>
    </div>
  );
};

TaxonCard.propTypes = {
  taxon: PropTypes.objectOf.isRequired,
};

export default TaxonCard;

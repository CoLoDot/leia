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
import '../../styles/Taxon.scss';

const useStyles = makeStyles((theme) => ({
  mediaCloseButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
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
    <div className="taxon-global">
      {picture && <TaxonMedia name={name} picture={picture} classes={classes.mediaCloseButton} />}
      <div className="taxon-tab-container">
        <div className="taxon-tab-element">
          <FingerprintIcon />
          <LeiaTaxonId leiaID={id} />
        </div>
        <div className="taxon-tab-element">
          <ArrowForwardIosIcon />
          <TaxonIdentity
            scientificName={scientificName}
            vernacularName={vernacularName}
          />
        </div>
        {distribution && (
        <div className="taxon-tab-element">
          <PlaceIcon />
          <TaxonDistribution
            distribution={distribution}
          />
        </div>
        )}
        <div className="taxon-tab-element">
          <InfoIcon />
          <Taxonomy
            kingdom={kingdom}
            phylum={phylum}
            order={order}
            family={family}
            genus={genus}
            species={species}
            taxonClass={taxonClass}
          />
        </div>
        <div className="taxon-tab-element">
          <StorageIcon />
          <TaxonDataSources
            gbifKey={gbifKey}
            wikidataPageId={wikidataPageID}
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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const TaxonCard = ({ taxon }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {_.map(taxon, (value, key) =>
        value && <Paper variant="elevation" style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 'auto',
          justifyContent: 'center',
          width: 'max-content',
          textAlign: 'center'
        }}>
          {key === 'picture' ? <div style={{ width: 200, height: 200 }}>
            <img
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
              src={value}
              alt={taxon.name}
            />
          </div> : (
            <>
              <Typography>{key}</Typography>
              <Typography>{value}</Typography>
            </>)}
        </Paper>
      )}
    </div>
  );
}

export default TaxonCard
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
  },
  linear: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.linear}>
        <LinearProgress />
        <LinearProgress variant="query" />
      </div>
      <Typography>leia is loading data</Typography>
    </div>
  );
};

export default Loader;

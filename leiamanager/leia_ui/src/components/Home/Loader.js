import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2)
    },
    textAlign: "center",
    paddingTop: "50px"
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="primary" size={200} />
    </div>
  );
}

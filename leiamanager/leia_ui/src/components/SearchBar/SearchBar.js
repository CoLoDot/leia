import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          style={{ margin: 8, width: 300 }}
          placeholder="find"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    </div>
  );
}

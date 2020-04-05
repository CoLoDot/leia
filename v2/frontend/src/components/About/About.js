/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { forwardRef, useState } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography,
} from '@material-ui/core/';


const Transition = forwardRef((props, ref) => <Slide direction="down" ref={ref} {...props} />);

const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        About
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">About leia</DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-slide-description">
            leia has been built to improve your personal knowledge about extinct species.
            <br />
            leia is a SPA built with Python 3.7, Django and React.JS.
            <br />
            leia is an open source project. You can find the code repository on GitHub.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default About;

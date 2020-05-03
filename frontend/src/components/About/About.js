/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { forwardRef, useState } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography, Link,
} from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';

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
            Leia is a pedagogical project to improve people's knowledge about extinct species. Leia's data are coming from Wikidata and Global Biodiversity Information Facility open source APIs.
          </DialogContentText>
          <DialogContentText
            style={{
              display: 'flex',
              flexDirection: 'row',
              margin: 10,
              alignItems: 'center',
              padding: 'inherit',
            }}
          >
            <Link href="https://github.com/CoLoDot/leia" target="_blank" style={{ marginRight: 10 }}><GitHubIcon /></Link>
            <Typography variant="caption">
              Leia is an open source project, you can contribute by opening a pull request, reviews environnements will be soon available.
            </Typography>
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

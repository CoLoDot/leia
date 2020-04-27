/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  Button, Badge, Dialog, DialogContentText, DialogTitle,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

const TaxonMedia = ({ classes, name, picture }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      width: 300,
      display: 'flex',
      paddingRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
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
              maxWidth: 299,
              maxHeight: 319,
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
        <DialogContentText
          id="alert-dialog-slide-description"
          style={{
            minWidth: 400,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
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
      </Dialog>
    </div>
  );
};

TaxonMedia.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  classes: PropTypes.isRequired,
};

export default TaxonMedia;

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import About from '../About/About';

const Header = () => (
  <AppBar position="sticky" color="primary">
    <Toolbar>
      <Typography variant="h4" style={{ flex: 1 }}>
        leia
      </Typography>
      <Typography style={{ flex: 16 }}>improves your personal knowledge about extinct species</Typography>
      <Toolbar style={{ paddingRight: '0px' }}>
        <>
          <About />
        </>
      </Toolbar>
    </Toolbar>
  </AppBar>
);

export default Header;

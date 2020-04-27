/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import About from '../About/About';

const Header = () => (
  <AppBar position="sticky" color="transparent">
    <Toolbar>
      <Typography variant="h4" style={{ flex: 1 }}>
        leia
        <Typography
          variant="caption"
          style={{
            display: 'inline-block',
            marginLeft: 10,
          }}
        >
          extinct species database
        </Typography>
      </Typography>
      <Toolbar style={{ paddingRight: '0px' }}>
        <>
          <About />
        </>
      </Toolbar>
    </Toolbar>
  </AppBar>
);

export default Header;

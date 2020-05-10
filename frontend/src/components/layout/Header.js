/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';
import { updateTaxa } from '../../actions/taxa';
import About from '../About/About';

const Header = (props) => {
  const [isUpdating, setUpdate] = useState(false);
  const clickActions = () => {
    props.updateTaxa();
    setUpdate(true);
  };
  return (
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
            <Button variant="contained" style={{ marginRight: 10 }} onClick={clickActions} disabled>Update database</Button>
            <About />
          </>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  updateTaxa: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.Taxa.update.loading,
});

const mapDispatchToProps = (dispatch) => ({ updateTaxa: () => dispatch(updateTaxa()) });


export default connect(mapStateToProps, mapDispatchToProps)(Header);

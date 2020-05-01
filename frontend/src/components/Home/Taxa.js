/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import _ from 'lodash';
import AppBar from '@material-ui/core/AppBar';
import TaxonContainer from '../Taxon/TaxonContainer';

const TabPanel = (props) => {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.isRequired,
  value: PropTypes.isRequired,
};

const a11yProps = (index) => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: '10px',
  },
}));

const Taxa = ({ taxa }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    !_.isEmpty(taxa) && (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs
          scrollButtons="on"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Taxa vertical tabs"
          className={classes.tabs}
          indicatorColor="primary"
        >
          {_.map(taxa, (taxon) => (
            <Tab
              label={taxon.vernacularName || taxon.name}
              {...a11yProps(
                _.indexOf(taxa, taxon, 0),
              )}
            />
          ))}
        </Tabs>
      </AppBar>
      {_.map(taxa, (taxon) => (
        <TabPanel value={value} index={_.indexOf(taxa, taxon)}>
          <TaxonContainer taxon={taxon} />
        </TabPanel>
      ))}
    </div>
    )
  );
};

Taxa.propTypes = {
  taxa: PropTypes.arrayOf.isRequired,
};

export default Taxa;

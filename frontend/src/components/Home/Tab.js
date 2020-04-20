import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import _ from 'lodash';
import TaxonGrid from './Grid'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

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
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '70%',
        paddingTop: '2%'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const TaxaTabs = ({ taxa }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        !_.isEmpty(taxa) && <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Taxa vertical tabs"
                className={classes.tabs}
                indicatorColor='primary'
            >
                {_.map(taxa, (taxon) => <Tab label={taxon.name} {...a11yProps(_.indexOf(taxa, taxon, 0))} />)}
            </Tabs>
            {_.map(taxa, (taxon) => <TabPanel value={value} index={_.indexOf(taxa, taxon)}><TaxonGrid taxon={taxon}/></TabPanel>)}
        </div>
    );
}

export default TaxaTabs
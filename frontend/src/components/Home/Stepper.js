/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@material-ui/core';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: '5px',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(0),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

const getSteps = () => ['Scientifc name', 'Kingdom', 'Phylum', 'Order', 'Family', 'Genus', 'Species', 'Class', 'Distribution'];

const getStepContent = (
  step,
  scientificName,
  kingdom, 
  phylum, 
  order, 
  family, 
  genus,
  species,
  taxonClass,
  distribution
) => {
  switch (step) {
    case 0:
      return scientificName
    case 1:
      return kingdom
    case 2:
      return phylum
    case 3:
      return order
    case 4:
      return family
    case 5:
      return genus
    case 6:
      return species
    case 7:
      return taxonClass
    case 8:
      return distribution
    default:
      return 'Unknown step';
  }
};

const VerticalLinearStepper = ({
  scientificName,
  kingdom, 
  phylum, 
  order, 
  family, 
  genus,
  species,
  taxonClass,
  distribution,
  setOrientation
}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation={setOrientation}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>
                {getStepContent(
                  index,
                  scientificName,
                  kingdom, 
                  phylum, 
                  order, 
                  family, 
                  genus,
                  species,
                  taxonClass,
                  distribution
                )}
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Read again
          </Button>
        </Paper>
      )}
    </div>
  );
};

VerticalLinearStepper.propTypes = {
  binomialName: PropTypes.string,
  commonName: PropTypes.string,
  endemicOf: PropTypes.string,
  taxonomicRank: PropTypes.string,
  taxonSuperior: PropTypes.string,
};

export default VerticalLinearStepper;

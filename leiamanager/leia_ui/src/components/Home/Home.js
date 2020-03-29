import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import {
  ButtonBase,
  Container,
  Typography,
  TextField,
  Grid
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import VerticalLinearStepper from "./Stepper";
import { getTaxon } from "../../actions/taxon";
import _ from "lodash";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taxon: new Array()
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  static propTypes = {
    taxon: PropTypes.array.isRequired,
    getTaxon: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getTaxon();
  }

  handleOnChange(value) {
    const toSet = value;
    this.setState({ taxon: toSet });
  }

  render() {
    const { taxon } = this.state;
    return (
      <Container fixed>
        <Autocomplete
          style={{ paddingTop: "20px" }}
          multiple
          id="tags-outlined"
          options={this.props.taxon}
          getOptionLabel={option =>
            _.upperFirst(option.common_name || option.binomial_name)
          }
          filterSelectedOptions
          onChange={(event, value) => this.handleOnChange(value)}
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label="Look for an exctinct specie"
              placeholder=" + "
            />
          )}
        />
        {!_.isEmpty(taxon) &&
          _.reverse(
            _.map(taxon, taxa => (
              <Grid
                container
                spacing={3}
                alignItems="center"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#3f51b5",
                  color: "#FFFFFF",
                  padding: "0px",
                  width: "calc(100%)",
                  marginLeft: "0px",
                  marginTop: "10px",
                  marginBottom: "15px"
                }}
              >
                <Grid item xs={3}>
                  <Typography variant="h6" align="center">
                    {_.upperFirst(taxa.common_name)}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    padding: "0px"
                  }}
                >
                  <VerticalLinearStepper
                    binomialName={taxa.binomial_name}
                    commonName={taxa.common_name}
                    endemicOf={taxa.endemic_of}
                    taxonomicRank={taxa.taxonomic_rank}
                    taxonSuperior={taxa.taxon_superior}
                  />
                </Grid>
                <Grid item>
                  <ButtonBase style={{ width: 240, height: 340 }}>
                    <img
                      style={{
                        margin: "auto",
                        display: "block",
                        maxWidth: "100%",
                        maxHeight: "100%"
                      }}
                      src={taxa.picture}
                      alt={taxa.common_name}
                    />
                  </ButtonBase>
                </Grid>
              </Grid>
            ))
          )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  taxon: state.Taxon.taxon
});

export default connect(mapStateToProps, { getTaxon })(Home);

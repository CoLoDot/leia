import React from "react";
import { ButtonBase, Typography, Grid } from "@material-ui/core";
import VerticalLinearStepper from "./Stepper";
import _ from "lodash";

export default function TaxonGrid({ taxon }) {
  return (
    !_.isEmpty(taxon) &&
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
    )
  );
}

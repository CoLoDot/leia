import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import _ from "lodash";

export default function SearchBar({ taxon, onChangeTaxon }) {
  return (
    <Autocomplete
      style={{ paddingTop: "20px" }}
      multiple
      id="tags-outlined"
      options={taxon}
      getOptionLabel={option =>
        _.upperFirst(option.common_name || option.binomial_name)
      }
      filterSelectedOptions
      onChange={(event, value) => onChangeTaxon(value)}
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          label="Look for an exctinct specie"
          placeholder=" + "
        />
      )}
    />
  );
}

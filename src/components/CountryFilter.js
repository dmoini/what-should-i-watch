import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

import COUNTRY_ISO_3166_CODES from "../common/iso3166CountryCodes";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const theme = {
  spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
};

const useStyles = makeStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

export default function CountryFilter({ currentCountry, handleChange }) {
  const classes = useStyles();

  const menuCountries = COUNTRY_ISO_3166_CODES.map((country) => {
    return (
      <MenuItem value={country.code} key={country.code}>
        {country.name}
      </MenuItem>
    );
  });

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel shrink id="simple-select-placeholder-label-label">
          Country
        </InputLabel>
        <Select
          labelId="simple-select-placeholder-label-label"
          id="simple-select-placeholder-label"
          value={currentCountry}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {menuCountries}
        </Select>
      </FormControl>
    </div>
  );
}

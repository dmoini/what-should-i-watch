import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

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

export default function GenreFilter({ genres, currentGenre, handleChange }) {
  const classes = useStyles();

  const menuItems = genres.map((genre) => {
    return <MenuItem value={genre.name}>{genre.name}</MenuItem>;
  });

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="simple-select-filled-label"
          id="simple-select-filled"
          value={currentGenre}
          onChange={handleChange}
          autowidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {menuItems}
        </Select>
      </FormControl>
    </div>
  );
}

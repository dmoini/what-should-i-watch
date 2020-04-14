import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

import React from "react";
import TMDB_GENRES from "../common/tmdbGenres";
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

export default function GenreFilter({ currentGenre, handleChange }) {
  const classes = useStyles();

  const menuGenres = Object.keys(TMDB_GENRES).map((genre) => {
    return (
      <MenuItem value={genre} key={genre}>
        {genre}
      </MenuItem>
    );
  });

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel shrink id="simple-select-placeholder-label-label">
          Genre
        </InputLabel>
        <Select
          labelId="simple-select-placeholder-label-label"
          id="simple-select-placeholder-label"
          value={currentGenre}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {menuGenres}
        </Select>
      </FormControl>
    </div>
  );
}

import React, { useState } from "react";

import Background from "../images/moviesBackground.jpg";
import { Button } from "@material-ui/core";
import GenreFilter from "../components/GenreFilter";
import TMDB_GENRES from "../common/tmdbGenres";
import YearRangeFilter from "../components/YearRangeFilter";
import { makeStyles } from "@material-ui/core/styles";
import { moviesTheme } from "../categoryThemes";

// TODO: add hover, click colors
const useStyles = makeStyles({
  background: {
    // backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
  button: {
    backgroundColor: moviesTheme.backgroundColor,
    color: moviesTheme.textColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  filterAndSearchComponents: {
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%, -50%)",
  },
});

export default function MoviesPages() {
  const [genre, setGenre] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const handleYearChange = {
    startYear: (e) => setStartYear(e.target.value),
    endYear: (e) => setEndYear(e.target.value),
  };
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.filterAndSearchComponents}>
        <GenreFilter
          genres={TMDB_GENRES}
          currentGenre={genre}
          handleChange={(e) => setGenre(e.target.value)}
        />
        <YearRangeFilter handleChange={handleYearChange} />
        <Button
          variant="contained"
          color="secondary"
          classes={{ root: classes.button }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

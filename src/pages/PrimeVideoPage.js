import { Button, Grid, Typography } from "@material-ui/core";
// import { ToggleButton } from '@material-ui/lab';
import React, { useState } from "react";
import { primeVideoTheme } from "../common/categoryThemes";
// import 
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: primeVideoTheme.backgroundColor,
    "&:hover": {
      backgroundColor: primeVideoTheme.buttonHoverColor,
    },
    color: primeVideoTheme.textColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  grid: {
    minHeight: "50vh",
    paddingTop: "80px",
    paddingBottom: "80px",
  },
  title: {
    color: primeVideoTheme.backgroundColor,
    fontWeight: "700",
  },
});

export default function MoviesPages() {
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [averageRating, setAverageRating] = useState("");
  const [clickedSearch, setClickedSearch] = useState(false);
  const [movieData, setMovieData] = useState({});
  const [movies, setMovies] = useState(true);
  const [shows, setShows] = useState(false);

  const handleYearChange = {
    startYear: (e) => setStartYear(e.target.value),
    endYear: (e) => setEndYear(e.target.value),
  };
  const classes = useStyles();

  const isNumber = (s) => /^\d+$/.test(s);
  const isValidRating = (s) => /^(10|(\d(\.\d+)?))$/.test(s);

  const invalidUserInput = () => {
    if ([genre, country, startYear, endYear, averageRating].every((v) => !v)) {
      window.alert("Please use at least one filter.");
      return true;
    }

    if (
      (startYear && !isNumber(startYear)) ||
      (endYear && !isNumber(endYear))
    ) {
      window.alert(
        "If using Start Year and/or End Year filters, make sure they are valid years."
      );
      return true;
    }

    if (averageRating && !isValidRating(averageRating)) {
      window.alert(
        "If using Average Rating filter, make sure it is a valid decimal between 1-10."
      );
      return true;
    }

    return false;
  };

  const handleSearch = async () => {
    if (invalidUserInput()) {
      return;
    }

    // const totalPages = await getDiscoverMoviesResultPages({
    //   genre,
    //   country,
    //   startYear,
    //   endYear,
    //   averageRating,
    // });

    // const res = await discoverMovies({
    //   genre,
    //   country,
    //   startYear,
    //   endYear,
    //   averageRating,
    //   page:
    //     totalPages > 1
    //       ? Math.floor(Math.random() * totalPages) + 1
    //       : totalPages,
    // });

    // if (res) {
    //   setMovieData(res);
    //   setClickedSearch(true);
    // } else {
    //   window.alert("Something went wrong.");
    // }
  };
//  CAN ONLY REALLY SEARCH BY MOVIES OR SHOWS 
//  BUTTON 1 = SEARCH FOR MOVIES 
//  BUTTON 2 = SEARCH FOR TV SHOWS
//  SELECT NUMBER OF SHOWS / MOVIES TO BE RETURNED : DEFAULT = 10, no negative or greater than 250
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Typography variant="h2" className={classes.title}>
            Prime Video
          </Typography>
        </Grid>
        <Grid item>
          {/* <GenreFilter
            currentGenre={genre}
            handleChange={(e) => setGenre(e.target.value)}
          /> */}
        </Grid>
        <Grid item>
          {/* <CountryFilter
            currentCountry={country}
            handleChange={(e) => setCountry(e.target.value)}
          /> */}
        </Grid>
        <Grid item>
          {/* <YearRangeFilter handleChange={handleYearChange} /> */}
        </Grid>
        <Grid item>
          {/* <AverageRatingFilter
            handleChange={(e) => setAverageRating(e.target.value)}
          /> */}
        </Grid>
        <Grid item>
          <Button
            classes={{ root: classes.button }}
            variant="contained"
            onClick={async () => {
              await handleSearch();
            }}
          >
            Generate 
          </Button>
        </Grid>
      </Grid>
      {/* <div style={{ paddingBottom: "100px" }}>
        <>{clickedSearch && <SearchResultList data={movieData} />}</>
      </div> */}
    </div>
  );
}

// need to add this prime tab to app.js
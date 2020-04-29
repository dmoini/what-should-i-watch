import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import {
  discoverMovies,
  getDiscoverMoviesResultPages,
  getTrendingMovies,
} from "../api/moviesApi";

import AverageRatingFilter from "../components/AverageRatingFilter";
import CountryFilter from "../components/CountryFilter";
import GenreFilter from "../components/GenreFilter";
import TmdbSearchResults from "../components/TmdbSearchResults";
import { makeStyles } from "@material-ui/core/styles";
import { moviesTheme } from "../common/categoryThemes";

const useStyles = makeStyles({
  button: {
    backgroundColor: moviesTheme.backgroundColor,
    "&:hover": {
      backgroundColor: moviesTheme.buttonHoverColor,
    },
    color: moviesTheme.textColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  grid: {
    minHeight: "50vh",
    paddingTop: "80px",
    paddingBottom: "80px",
  },
  title: {
    color: moviesTheme.backgroundColor,
    fontWeight: "700",
  },
});

export default function MoviesPages() {
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [averageRating, setAverageRating] = useState("");
  const [clickedSearchOrTrending, setClickedSearchOrTrending] = useState(false);
  const [movieData, setMovieData] = useState({});
  const classes = useStyles();

  const isValidRating = (s) => /^(10|(\d(\.\d+)?))$/.test(s);

  const invalidUserInput = () => {
    if ([genre, country, averageRating].every((v) => !v)) {
      window.alert("Please use at least one filter.");
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

    const totalPages = await getDiscoverMoviesResultPages({
      genre,
      country,
      averageRating,
    });

    const res = await discoverMovies({
      genre,
      country,
      averageRating,
      page:
        totalPages > 1
          ? Math.floor(Math.random() * totalPages) + 1
          : totalPages,
    });

    if (res) {
      setMovieData(res);
      setClickedSearchOrTrending(true);
    } else {
      window.alert("Something went wrong.");
    }
  };

  const handleTrending = async () => {
    const res = await getTrendingMovies();
    if (res) {
      setMovieData(res);
      setClickedSearchOrTrending(true);
    } else {
      window.alert("Something went wrong.");
    }
  };

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
            Find Movies
          </Typography>
        </Grid>
        <Grid item>
          <GenreFilter
            currentGenre={genre}
            handleChange={(e) => setGenre(e.target.value)}
          />
        </Grid>
        <Grid item>
          <CountryFilter
            currentCountry={country}
            handleChange={(e) => setCountry(e.target.value)}
          />
        </Grid>
        <Grid item>
          <AverageRatingFilter
            handleChange={(e) => setAverageRating(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            classes={{ root: classes.button }}
            variant="contained"
            style={{ marginRight: "10px" }}
            onClick={async () => {
              await handleSearch();
            }}
          >
            Search
          </Button>
          <Button
            classes={{ root: classes.button }}
            variant="contained"
            style={{ marginLeft: "10px" }}
            onClick={async () => {
              await handleTrending();
            }}
          >
            Trending
          </Button>
        </Grid>
      </Grid>
      <div style={{ paddingBottom: "100px" }}>
        <>{clickedSearchOrTrending && <TmdbSearchResults data={movieData} />}</>
      </div>
    </div>
  );
}

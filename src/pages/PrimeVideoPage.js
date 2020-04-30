import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { apiHost, searchMovies, searchShows } from "../api/primeApi";

import GuideboxMoviesSearchResults from "../components/GuideboxMoviesSearchResults";
import GuideboxShowsSearchResults from "../components/GuideboxShowsSearchResults";
import LimitFilter from "../components/LimitFilter";
import PrimeLogo from "../images/prime_logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { primeVideoTheme } from "../common/categoryThemes";

const useStyles = makeStyles({
  button: {
    backgroundColor: primeVideoTheme.backgroundColor,
    "&:hover": {
      backgroundColor: primeVideoTheme.buttonHoverColor,
    },
    color: primeVideoTheme.textColor,
    fontSize: 20,
    fontWeight: "bold",
    margin: "10px",
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
  image: {
    height: "125px",
    marginBottom: "30px",
  },
});

export default function MoviesPages() {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [limit, setLimit] = useState(10);
  const [error, setError] = useState(null);
  const [showingMovies, setShowingMovies] = useState(false);
  const [queryPerformed, setQueryPerformed] = useState(false);

  useEffect(() => apiHost("http://api-public.guidebox.com/v2"));

  const performMovieQuery = async (event) => {
    event.preventDefault();

    if (invalidUserInput()) {
      return;
    }

    try {
      const result = await searchMovies({
        limit: limit,
        offset: Math.floor(Math.random() * 10),
        sources: "amazon_prime",
      });
      setMovies(result.results);
      setShowingMovies(true);
      setQueryPerformed(true);
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
  };
  const performShowQuery = async (event) => {
    event.preventDefault();

    if (invalidUserInput()) {
      return;
    }

    try {
      const result = await searchShows({
        limit: limit,
        offset: Math.floor(Math.random() * 10),
        sources: "amazon_prime",
      });
      setShows(result.results);
      setShowingMovies(false);
      setQueryPerformed(true);
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
  };

  const classes = useStyles();

  const isValidLimit = (s) =>
    /^[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]$/.test(s);

  const invalidUserInput = () => {
    if ([limit, movies, shows].every((v) => !v)) {
      window.alert("Please use at least one filter.");
      return true;
    }

    if (limit && !isValidLimit(limit)) {
      window.alert("Please select a limit in the range of 0-250");
      return true;
    }

    return false;
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
            <img src={PrimeLogo} className={classes.image} alt="Logo" />
          </Typography>
        </Grid>
        <Grid item>
          <LimitFilter handleChange={(e) => setLimit(e.target.value)} />
        </Grid>
        <Grid item>
          <Button
            classes={{ root: classes.button }}
            variant="contained"
            onClick={performMovieQuery}
            onSubmit={performMovieQuery}
          >
            Generate Movies
          </Button>
          <Button
            classes={{ root: classes.button }}
            variant="contained"
            onClick={performShowQuery}
          >
            Generate Shows
          </Button>
        </Grid>
      </Grid>
      <div style={{ paddingBottom: "100px" }}>
        <>
          {queryPerformed && showingMovies && (
            <GuideboxMoviesSearchResults data={movies} />
          )}
        </>
        <>
          {queryPerformed && !showingMovies && (
            <GuideboxShowsSearchResults data={shows} />
          )}
        </>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

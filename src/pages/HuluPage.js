import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { apiHost, searchMovies, searchShows } from "../api/huluApi";
import GuideboxShowsSearchResults from "../components/GuideboxShowsSearchResults";
import GuideboxMoviesSearchResults from "../components/GuideboxMoviesSearchResults";

import HuluLogo from "../images/hululogo.png";
import { makeStyles } from "@material-ui/core/styles";
import { huluTheme } from "../common/categoryThemes";
import LimitFilter from "../components/LimitFilter";

const useStyles = makeStyles({
  button: {
    backgroundColor: huluTheme.backgroundColor,
    "&:hover": {
      backgroundColor: huluTheme.buttonHoverColor,
    },
    color: huluTheme.textColor,
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
    color: huluTheme.backgroundColor,
    fontWeight: "700",
  },
  image: {
    marginBottom: "30px",
    width: "300px",
  },
});

export default function HuluPage() {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [limit, setLimit] = useState(10);
  const [error, setError] = useState(null);
  const [showingMovies, setShowingMovies] = useState(false);
  const [queryPerformed, setQueryPerformed] = useState(false);
  const MAX_OFFSET = 250;
  useEffect(() => apiHost("http://api-public.guidebox.com/v2"));

  const performMovieQuery = async (event) => {
    event.preventDefault();

    if (invalidUserInput()) {
      return;
    }

    try {
      const result = await searchMovies({
        limit: limit,
        offset: Math.floor(Math.random() * (MAX_OFFSET - limit)),
        sources: "hulu",
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
        sources: "hulu",
      });
      setShows(result.results.sort(() => Math.random() - 0.5));
      setShowingMovies(false);
      setQueryPerformed(true);
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
  };

  const classes = useStyles();

  const isValidLimit = (s) =>
    /^(\d|[1-9]\d|1\d\d|2[0-4]\d|250)$/.test(s);

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
            <img src={HuluLogo} className={classes.image} alt="Logo" />
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

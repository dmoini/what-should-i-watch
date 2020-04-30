import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { apiHost, searchMovies, searchShows } from "../api/netflixApi";

import GuideboxMoviesSearchResults from "../components/GuideboxMoviesSearchResults";
import GuideboxShowsSearchResults from "../components/GuideboxShowsSearchResults";
import LimitFilter from "../components/LimitFilter";
import { makeStyles } from "@material-ui/core/styles";
import { netflixTheme } from "../common/categoryThemes";

const MAX_OFFSET = 250;

const useStyles = makeStyles({
  background: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
  button: {
    backgroundColor: netflixTheme.backgroundColor,
    "&:hover": {
      backgroundColor: netflixTheme.buttonHoverColor,
    },
    color: netflixTheme.textColor,
    fontSize: 20,
    fontWeight: "bold",
    margin: "10px",
  },
  grid: {
    minHeight: "50vh",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  title: {
    color: netflixTheme.backgroundColor,
    fontWeight: "700",
  },
  resultTitle: {
    color: netflixTheme.backgroundColor,
    fontWeight: "500",
    titlePosition: "center",
  },
});

export default function NetflixPages() {
  const [limit, setLimit] = useState(10);
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [showingShowInfo, setShowingShowInfo] = useState(false);
  const [netflixData, setNetflixData] = useState(false);

  useEffect(() => apiHost("http://api-public.guidebox.com/v2"));

  const performShowQuery = async (event) => {
    event.preventDefault();

    if (invalidUserInput()) {
      return;
    }

    try {
      const result = await searchShows({
        offset: Math.floor(Math.random() * (MAX_OFFSET - limit)),
        limit: limit,
        sources: "netflix",
      });
      setShows(result.results.sort(() => Math.random() - 0.5));
      setShowingShowInfo(true);
      setNetflixData(true);
    } catch (error) {
      window.alert("Something went wrong.");
    }
  };

  const performMovieQuery = async (event) => {
    event.preventDefault();

    if (invalidUserInput()) {
      return;
    }

    try {
      const result = await searchMovies({
        offset: Math.floor(Math.random() * (MAX_OFFSET - limit)),
        limit: limit,
        sources: "netflix",
      });
      setMovies(result.results.sort(() => Math.random() - 0.5));
      setShowingShowInfo(false);
      setNetflixData(true);
    } catch (error) {
      window.alert("Something went wrong.");
    }
  };

  const classes = useStyles();

  const isValidLimit = (s) =>
    /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|250)$/.test(s);

  const invalidUserInput = () => {
    if ([limit, shows, movies].every((v) => !v)) {
      window.alert("Please use at least one filter.");
      return true;
    }

    if (limit && !isValidLimit(limit)) {
      window.alert("Please select a limit between 0-250.");
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
            Find TV Shows and Movies
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
          >
            Find Movies
          </Button>
          <Button
            classes={{ root: classes.button }}
            variant="contained"
            onClick={performShowQuery}
          >
            Find Shows
          </Button>
        </Grid>
      </Grid>
      <div style={{ paddingTop: "100px" }}>
        <>
          {showingShowInfo && netflixData && (
            <GuideboxShowsSearchResults data={shows} />
          )}
        </>
        <>
          {!showingShowInfo && netflixData && (
            <GuideboxMoviesSearchResults data={movies} />
          )}
        </>
      </div>
    </div>
  );
}

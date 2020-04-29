import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { discoverTv, getTrendingTv } from "../api/tvShowsApi";

import AverageRatingFilter from "../components/AverageRatingFilter";
import CountryFilter from "../components/CountryFilter";
import GenreFilter from "../components/GenreFilter";
import TmdbSearchResults from "../components/TmdbSearchResults";
import { makeStyles } from "@material-ui/core/styles";
import { tvShowsTheme } from "../common/categoryThemes";

const useStyles = makeStyles({
  button: {
    backgroundColor: tvShowsTheme.backgroundColor,
    "&:hover": {
      backgroundColor: tvShowsTheme.buttonHoverColor,
    },
    color: tvShowsTheme.textColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  grid: {
    minHeight: "50vh",
    paddingTop: "80px",
    paddingBottom: "80px",
  },
  title: {
    color: tvShowsTheme.backgroundColor,
    fontWeight: "700",
  },
});

export default function TvShowsPage() {
  const [genre, setGenre] = useState("");
  const [averageRating, setAverageRating] = useState("");
  const [country, setCountry] = useState("");
  const [search, setSearch] = useState(false);
  const [tvData, setTvData] = useState({});
  const classes = useStyles();

  const isValidRating = (s) => /^(10|(\d(\.\d+)?))$/.test(s);

  const handleSearch = async () => {
    if (invalidUserInput()) {
      return;
    }

    const res = await discoverTv({
      genre,
      averageRating,
    });

    if (res) {
      setTvData(res);
      setSearch(true);
    }
  };

  const handleTrending = async () => {
    const res = await getTrendingTv();
    if (res) {
      setTvData(res);
      setSearch(true);
    }
  };

  const invalidUserInput = () => {
    if ([genre, averageRating, country].every((v) => !v)) {
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
            Find TV Shows
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
        <>{search && <TmdbSearchResults data={tvData} />}</>
      </div>
    </div>
  );
}

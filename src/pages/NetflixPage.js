import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { findNetflixMoviesAndShows, getNetflixResultPages } from "../api/netflixApi";

import AverageRatingFilter from "../components/AverageRatingFilter";
import CountryFilter from "../components/CountryFilter";
import GenreFilter from "../components/GenreFilter";
import YearRangeFilter from "../components/YearRangeFilter";
import SearchResultList from "../components/SearchResultList";
import { makeStyles } from "@material-ui/core/styles";
import { netflixTheme } from "../common/categoryThemes";

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
  },
  grid: {
    minHeight: "100vh",
    paddingBottom: "700px",
  },
  title: {
    color: netflixTheme.backgroundColor,
    fontWeight: "700",
  },
});

export default function NetflixPages() {
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [averageRating, setAverageRating] = useState("");
  const [clickedSearch, setClickedSearch] = useState(false);
  const [netflixData, setNetflixData] = useState({});
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

    const totalPages = await getNetflixResultPages({
      genre,
      country,
      startYear,
      endYear,
      averageRating,
    });

    const res = await findNetflixMoviesAndShows({
      genre,
      country,
      startYear,
      endYear,
      averageRating,
      page:
        totalPages > 1
          ? Math.floor(Math.random() * totalPages) + 1
          : totalPages,
    });

    if (res) {
      setNetflixData(res);
      setClickedSearch(true);
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
          <YearRangeFilter handleChange={handleYearChange} />
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
            onClick={async () => {
              await handleSearch();
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <div style={{ paddingBottom: "100px" }}>
        <>{clickedSearch && <SearchResultList data={netflixData} />}</>
      </div>
    </div>
  );
}
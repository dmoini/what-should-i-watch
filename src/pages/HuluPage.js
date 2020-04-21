import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";

import Logo from "../images/hululogo.png";
import AverageRatingFilter from "../components/AverageRatingFilter";
import CountryFilter from "../components/CountryFilter";
import GenreFilter from "../components/GenreFilter";
import SearchResultList from "../components/SearchResultList";
import TMDB_MOVIES_MOCK_DATA from "../mock/mockMoviesData";
import YearRangeFilter from "../components/YearRangeFilter";
import { makeStyles } from "@material-ui/core/styles";
import { huluTheme } from "../common/categoryThemes";

const useStyles = makeStyles({
  button: {
    backgroundColor: huluTheme.backgroundColor,
    "&:hover": {
      backgroundColor: huluTheme.buttonHoverColor,
    },
    color: huluTheme.textColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  grid: {
    minHeight: "100vh",
    paddingBottom: "700px",
  },
  title: {
    color: huluTheme.backgroundColor,
    fontWeight: "700",
    marginTop: "20px",
  },
  image: {
    margin: "20px",
    width: "300px",
  },
});

export default function HuluPage() {
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [averageRating, setAverageRating] = useState("");
  const [clickedSearch, setClickedSearch] = useState(false);
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

  const handleSearch = () => {
    if (invalidUserInput()) {
      return;
    }
    console.log(
      `Genre: ${genre}\nCountry: ${country}\nStart Year: ${startYear}\nEnd Year: ${endYear}\nAverage Rating:${averageRating}`
    );

    setClickedSearch(true);
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
          <img src={Logo} className={classes.image} alt="Logo" />
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
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <div style={{ paddingBottom: "100px" }}>
        <>
          {clickedSearch && <SearchResultList data={TMDB_MOVIES_MOCK_DATA} />}
        </>
      </div>
    </div>
  );
}

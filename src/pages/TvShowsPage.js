import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { discoverTv, getTrendingTv } from "../api/tvShowsApi";

import CountryFilter from "../components/CountryFilter";
import GenreFilter from "../components/GenreFilter";
import SearchResultList from "../components/SearchResultList";
import { tvShowsTheme } from "../common/categoryThemes";

export default function TvShowsPage() {
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

  const classes = useStyles();
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [country, setCountry] = useState("");
  const [search, setSearch] = useState(false);
  const [tvData, setTvData] = useState({});

  const handleRating = (event) => {
    setRating(event.target.value);
  };

  const handleSearch = async () => {
    if (handleFilters()) {
      return;
    }
    const res = await discoverTv({
      genre,
      rating,
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

  const handleFilters = () => {
    if ([genre, rating].every((v) => !v)) {
      window.alert("Please use at least one filter.");
      return true;
    }
    return false;
  };

  return (
    <div align="center">
      <Typography variant="h2" className={classes.title}>
        TV Shows
      </Typography>
      <GenreFilter
        currentGenre={genre}
        handleChange={(e) => setGenre(e.target.value)}
      />
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel shrink id="simple-select-placeholder-label-label">
          Rating
        </InputLabel>
        <Select value={rating} onClick={handleRating} displayEmpty>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
      <CountryFilter
        currentCountry={country}
        handleChange={(e) => setCountry(e.target.value)}
      />
      <div>
        <Button
          classes={{ root: classes.button }}
          onClick={async () => {
            await handleTrending();
          }}
        >
          Trending
        </Button>
        <Button
          classes={{ root: classes.button }}
          onClick={async () => {
            await handleSearch();
          }}
        >
          Search
        </Button>
        <div style={{ paddingBottom: "100px" }}>
          <>{search && <SearchResultList data={tvData} />}</>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { makeStyles, Typography, Button, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import { tvShowsTheme } from "../common/categoryThemes";
import { discoverTv, getTrendingTv } from "../api/tvShowsApi";
import SearchResultList from "../components/SearchResultList";
import GenreFilter from "../components/GenreFilter";
import CountryFilter from "../components/CountryFilter";

export default function TvShowsPage() {
    const theme = {
        spacing: (factor) => `${0.5 * factor}rem`
      };

    const useStyles = makeStyles({
        title: {
            color: tvShowsTheme.backgroundColor,
            fontWeight: "700",
        },
         formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        button: {
            margin: theme.spacing(1),
            backgroundColor: tvShowsTheme.backgroundColor,
            color: tvShowsTheme.textColor
          }
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
            rating        
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
        <div align = "center">
            <Typography variant = "h2" className = { classes.title }>TV Shows</Typography>
            <GenreFilter currentGenre = { genre } handleChange = {(e) => setGenre(e.target.value)}/>
            <FormControl variant = "filled" className = { classes.formControl }>
                <InputLabel shrink id = "simple-select-placeholder-label-label">Rating</InputLabel>
                <Select value={ rating } onClick = { handleRating } displayEmpty>
                    <MenuItem value=""><em>None</em></MenuItem>
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
           <CountryFilter currentCountry = { country } handleChange={(e) => setCountry(e.target.value)}/>
            <div>
                <Button classes = {{ root: classes.button }} onClick = { async () => { await handleTrending(); }}>
                    Trending
                </Button>
                <Button classes = {{ root: classes.button }} onClick = { async () => { await handleSearch(); }}>
                    Search
                </Button>
                <div style={{ paddingBottom: "100px" }}>
                    <>{ search && <SearchResultList data = { tvData } />}</>
                </div>
            </div>
        </div>
    );
}
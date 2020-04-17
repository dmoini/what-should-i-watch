import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { tvShowsTheme } from "../common/categoryThemes";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import AverageRatingFilter from "../components/AverageRatingFilter";
import GenreFilter from "../components/GenreFilter";


export default function TvShowsPage() {
    const theme = {
        spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
      });

    const classes = useStyles();
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");

    const handleChange = (event) => {
        setRating(event.target.value);
      };

    return (
        <div className={classes.root}>
            <Typography variant = 'h5' className={classes.title}> TV Shows </Typography>
            <GenreFilter onSubmit = {(e) => setGenre(e.target.value)}/>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel shrink id = "simple-select-placeholder-label-label">Rating</InputLabel>
                <Select
                    value={rating}
                    onChange={handleChange}
                    className={classes.selectEmpty}
                >
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
        </div>
    );
}
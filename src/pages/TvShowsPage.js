import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { tvShowsTheme } from "../common/categoryThemes";

import AverageRatingFilter from "../components/AverageRatingFilter";
import GenreFilter from "../components/GenreFilter";


export default function TvShowsPage() {
    const useStyles = makeStyles({
          title: {
            color: tvShowsTheme.backgroundColor,
            fontWeight: "700",
        },
      });

    const classes = useStyles();
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");

    return (
        <div className={classes.root}>
            <Typography variant = 'h5' className={classes.title}> TV Shows </Typography>
            <GenreFilter onSubmit = {(e) => setGenre(e.target.value)}/>
            <AverageRatingFilter onSubmit = {(e) => setRating(e.target.value)}/>
        </div>
    );
}
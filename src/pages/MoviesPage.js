import React, { useState } from "react";

import Background from "../images/moviesBackground.jpg";
import { Button } from "@material-ui/core";
import GenreFilter from "../components/GenreFilter";
import { makeStyles } from "@material-ui/core/styles";
import { moviesTheme } from "../categoryThemes";

// TODO: add hover, click colors
const useStyles = makeStyles({
  background: {
    // backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    paddingTop: "100px", // TODO: remove
  },
  button: {
    backgroundColor: moviesTheme.backgroundColor,
    color: moviesTheme.textColor,
    fontSize: 20,
    fontWeight: "bold",
  },
});

const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export default function MoviesPages() {
  const [currentGenre, setCurrentGenre] = useState("");
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <GenreFilter
        genres={genres}
        currentGenre={currentGenre}
        handleChange={(e) => setCurrentGenre(e.target.value)}
      />
      <Button
        variant="contained"
        color="secondary"
        classes={{ root: classes.button }}
      >
        Search
      </Button>
    </div>
  );
}

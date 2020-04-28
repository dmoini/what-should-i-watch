import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";

import InfoIcon from "@material-ui/icons/Info";
import NoImageFound from "../images/noImageFound.png";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "90vw",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
});

export default function GuideboxMoviesSearchResults({ data }) {
  const classes = useStyles();

  //   {
  //     id: 159727,
  //     title: "The Invisible Man",
  //     release_year: 2018,
  //     themoviedb: 337169,
  //     original_title: "The Invisible Man",
  //     alternate_titles: [],
  //     imdb: "tt1051906",
  //     pre_order: false,
  //     in_theaters: false,
  //     release_date: "2018-04-17",
  //     rating: "NR",
  //     rottentomatoes: 0,
  //     freebase: "",
  //     wikipedia_id: 0,
  //     metacritic: null,
  //     common_sense_media: null,
  //     poster_120x171:
  //       "http://static-api.guidebox.com/100117/thumbnails_movies_small/159727-8801342761-4066019920-1345254723-small-120x171.jpg",
  //     poster_240x342:
  //       "http://static-api.guidebox.com/100117/thumbnails_movies_medium/159727-6848356584-1650429801-5701544536-medium-240x342.jpg",
  //     poster_400x570:
  //       "http://static-api.guidebox.com/100117/thumbnails_movies/159727-8319376409-2809245247-4105077391-large-400x570.jpg",
  //   },

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={342}
        cols={5}
        spacing={20}
        className={classes.gridList}
      >
        {data.map((tile, index) => (
          <GridListTile key={index} imgFullHeight imgFullWidth>
            <img
              src={
                tile.poster_240x342 ? `${tile.poster_240x342}` : NoImageFound
              }
              alt={tile.title}
            />
            <GridListTileBar
              title={
                tile.release_year
                  ? `${tile.title} (${tile.release_year})`
                  : `${tile.title}`
              }
              actionIcon={
                <IconButton
                  aria-label={`Info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

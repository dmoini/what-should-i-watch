import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";

import InfoIcon from "@material-ui/icons/Info";
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

const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function SearchResultList({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={590}
        cols={5}
        spacing={20}
        className={classes.gridList}
      >
        {data.results.map((tile) => (
          <GridListTile
            key={`${TMDB_IMAGE_BASE_URL}${tile.poster_path}`}
            imgFullHeight
            imgFullWidth
          >
            <img
              src={`${TMDB_IMAGE_BASE_URL}${tile.poster_path}`}
              alt={tile.title}
            />
            <GridListTileBar
              title={`${tile.title} (${tile.release_date.substring(0, 4)})`}
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

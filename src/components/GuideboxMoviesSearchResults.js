
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
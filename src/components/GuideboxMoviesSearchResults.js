import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";

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
                tile.artwork_448x252
                  ? `${tile.artwork_448x252}`
                  : tile.poster_400x570
                  ? `${tile.poster_400x570}`
                  : NoImageFound
              }
              alt={tile.title}
            />
            <GridListTileBar
              title={
                tile.release_year
                  ? `${tile.title} (${tile.release_year})`
                  : `${tile.title}`
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

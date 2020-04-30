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
    width: "80vw",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
});

export default function GuideboxShowsSearchResults({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={150}
        cols={3}
        spacing={20}
        className={classes.gridList}
      >
        {data.map((tile, index) => (
          <GridListTile key={index}>
            <img
              src={
                tile.artwork_448x252
                  ? `${tile.artwork_448x252}`
                  : tile.artwork_608x342
                  ? `${tile.artwork_608x342}`
                  : NoImageFound
              }
              alt={tile.title}
            />
            <GridListTileBar
              title={
                tile.first_aired
                  ? `${tile.title} (${tile.first_aired.substring(0, 4)})`
                  : `${tile.title}`
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

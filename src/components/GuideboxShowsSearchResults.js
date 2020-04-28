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

export default function GuideboxShowsSearchResults({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={117}
        cols={5}
        spacing={20}
        className={classes.gridList}
      >
        {data.map((tile, index) => (
          <GridListTile key={index} imgFullHeight imgFullWidth>
            <img
              src={
                tile.artwork_208x117 ? `${tile.artwork_208x117}` : NoImageFound
              }
              alt={tile.title}
            />
            <GridListTileBar
              title={
                tile.first_aired
                  ? `${tile.title} (${tile.first_aired.substring(0, 4)})`
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

import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Tooltip,
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
  toolTipText: {
    fontSize: "18px",
    lineHeight: "1.25",
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
        {data.results.map((tile, index) => (
          <GridListTile key={index} imgFullHeight imgFullWidth>
            <img
              src={
                tile.poster_path
                  ? `${TMDB_IMAGE_BASE_URL}${tile.poster_path}`
                  : NoImageFound
              }
              alt={tile.title}
            />
            <GridListTileBar
              title={
                tile.release_date
                  ? `${tile.title} (${tile.release_date.substring(0, 4)})`
                  : `${tile.title}`
              }
              actionIcon={
                <>
                  {!!tile.overview && (
                    <Tooltip
                      title={
                        <span className={classes.toolTipText}>
                          {tile.overview}
                        </span>
                      }
                    >
                      <IconButton
                        aria-label={`Info about ${tile.title}`}
                        className={classes.icon}
                      >
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

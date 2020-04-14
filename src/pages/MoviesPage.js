import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";

import Background from "../images/moviesBackground.jpg";
import GenreFilter from "../components/GenreFilter";
import YearRangeFilter from "../components/YearRangeFilter";
import { makeStyles } from "@material-ui/core/styles";
import { moviesTheme } from "../common/categoryThemes";

const useStyles = makeStyles({
  background: {
    // backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
  button: {
    backgroundColor: moviesTheme.backgroundColor,
    "&:hover": {
      backgroundColor: moviesTheme.buttonHoverColor,
    },
    color: moviesTheme.textColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  grid: {
    minHeight: "100vh",
    paddingBottom: "300px",
  },
});

export default function MoviesPages() {
  const [genre, setGenre] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const handleYearChange = {
    startYear: (e) => setStartYear(e.target.value),
    endYear: (e) => setEndYear(e.target.value),
  };
  const classes = useStyles();

  const isNumber = (s) => /^\d+$/.test(s);

  const checkUserInput = () => {
    if (
      (startYear && !isNumber(startYear)) ||
      (endYear && !isNumber(endYear))
    ) {
      window.alert(
        "If using Start Year and/or End Year filters, make sure they are valid years."
      );
      return;
    }
  };

  return (
    <Grid
      className={classes.grid}
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <GenreFilter
          currentGenre={genre}
          handleChange={(e) => setGenre(e.target.value)}
        />
      </Grid>
      <Grid item>
        <YearRangeFilter handleChange={handleYearChange} />
      </Grid>
      <Grid item>
        <Button
          classes={{ root: classes.button }}
          variant="contained"
          onClick={() => {
            checkUserInput();
            console.log(
              `Genre: ${genre}\nStart Year: ${startYear}\nEnd Year: ${endYear}`
            );
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );

  // return (
  //   <div className={classes.background}>
  //     <div className={classes.centerComponents}>
  //       <GenreFilter
  //         currentGenre={genre}
  //         handleChange={(e) => setGenre(e.target.value)}
  //       />
  //       <YearRangeFilter handleChange={handleYearChange} />
  //       <Button
  //         classes={{ root: classes.button }}
  //         variant="contained"
  //         onClick={() => {
  //           console.log(
  //             `Genre: ${genre}\nStart Year: ${startYear}\nEnd Year: ${endYear}`
  //           );
  //         }}
  //       >
  //         Search
  //       </Button>
  //     </div>
  //   </div>
  // );
}

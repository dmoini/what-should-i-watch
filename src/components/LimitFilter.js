import React from "react";
import { TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function LimitFilter({ handleChange }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-number"
        label="Limit"
        type="number"
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    </form>
  );
}

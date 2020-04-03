import "./App.css";

import { AppBar, Button, Toolbar } from "@material-ui/core";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import SearchPage from "./pages/searchPage";
import WelcomePage from "./pages/welcomePage";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    marginLeft: "50px",
    marginRight: "50px",
  },
  link: {
    color: "#FFF",
    textDecoration: "none",
    fontSize: 24,
    fontWeight: "bold",
  },
  toolbar: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Button color="inherit" className={classes.button}>
            <Link to="/tv-shows" className={classes.link}>
              TV Shows
            </Link>
          </Button>
          <Button color="inherit" className={classes.button}>
            <Link to="/movies" className={classes.link}>
              Movies
            </Link>
          </Button>
          <Button color="inherit" className={classes.button}>
            <Link to="/netflix" className={classes.link}>
              Netflix
            </Link>
          </Button>
          <Button color="inherit" className={classes.button}>
            <Link to="/hulu" className={classes.link}>
              Hulu
            </Link>
          </Button>
          <Button color="inherit" className={classes.button}>
            <Link to="/amazon-prime" className={classes.link}>
              Amazon Prime
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/tv-shows">
          <SearchPage text="TV Shows" />
        </Route>
        <Route exact path="/movies">
          <SearchPage text="Movies" />
        </Route>
        <Route exact path="/netflix">
          <SearchPage text="Netflix" />
        </Route>
        <Route exact path="/hulu">
          <SearchPage text="Hulu" />
        </Route>
        <Route exact path="/amazon-prime">
          <SearchPage text="Amazon Prime" />
        </Route>
      </Switch>
    </Router>
  );
}

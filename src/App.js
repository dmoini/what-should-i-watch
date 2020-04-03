import "./App.css";

import { AppBar, Button, Toolbar } from "@material-ui/core";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useState } from "react";

import SearchPage from "./pages/searchPage";
import WelcomePage from "./pages/welcomePage";
import { makeStyles } from "@material-ui/core/styles";

const categoryThemes = {
  welcome: {
    backgroundColor: "blue",
    textColor: "white",
  },
  "tv-shows": {
    backgroundColor: "purple",
    textColor: "white",
  },
  movies: {
    backgroundColor: "red",
    textColor: "white",
  },
  netflix: {
    backgroundColor: "black",
    textColor: "#DB0011",
  },
  hulu: {
    backgroundColor: "#24E872",
    textColor: "black",
  },
  "prime-video": {
    backgroundColor: "#151B23",
    textColor: "#3299D9",
  },
};

const useStyles = makeStyles({
  appBar: {
    backgroundColor: (props) => categoryThemes[props.category].backgroundColor,
  },
  button: {
    marginLeft: "50px",
    marginRight: "50px",
  },
  link: {
    color: (props) => categoryThemes[props.category].textColor,
    textDecoration: "none",
    fontSize: 30,
    fontWeight: "bold",
  },
  toolbar: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default function App() {
  const [category, setCategory] = useState("welcome");
  const classes = useStyles({ category });

  if (category === "welcome" && !window.location.href.endsWith("/")) {
    window.location = "/";
  }

  return (
    <Router>
      <AppBar position="static" classes={{ root: classes.appBar }}>
        <Toolbar className={classes.toolbar}>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => setCategory("tv-shows")}
          >
            <Link to="/tv-shows" className={classes.link}>
              TV Shows
            </Link>
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => setCategory("movies")}
          >
            <Link to="/movies" className={classes.link}>
              Movies
            </Link>
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => setCategory("netflix")}
          >
            <Link to="/netflix" className={classes.link}>
              Netflix
            </Link>
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => setCategory("hulu")}
          >
            <Link to="/hulu" className={classes.link}>
              Hulu
            </Link>
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => setCategory("prime-video")}
          >
            <Link to="/prime-video" className={classes.link}>
              Prime Video
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
        <Route exact path="/prime-video">
          <SearchPage text="Prime Video" />
        </Route>
      </Switch>
    </Router>
  );
}

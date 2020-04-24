require("dotenv").config();

const tmdb = require("moviedb")(process.env.REACT_APP_TMDB_API_KEY);

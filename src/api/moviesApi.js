const tmdb = require("moviedb")(process.env.REACT_APP_TMDB_API_KEY);
const Promise = require("bluebird");

const MINIMUM_VOTES = 5; 


const generateParams = (genre, country, averageRating, page) => {
  return {
    page: page ? page : 1,
    with_genres: genre,
    region: country,
    "vote_count.gte": MINIMUM_VOTES,
    "vote_average.gte": averageRating ? parseInt(averageRating) : undefined,
  };
};

const getDiscoverMoviesResultPages = ({ genre, country, averageRating }) => {
  const promise = new Promise((resolve, reject) => {
    tmdb.discoverMovie(
      generateParams(genre, country, averageRating),
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.total_pages);
        }
      }
    );
  });
  return promise;
};

const discoverMovies = ({ genre, country, averageRating, page }) => {
  const promise = new Promise((resolve, reject) => {
    tmdb.discoverMovie(
      generateParams(genre, country, averageRating, page),
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          res.results.sort(() => Math.random() - 0.5);
          resolve(res);
        }
      }
    );
  });
  return promise;
};

const getTrendingMovies = () => {
  const promise = new Promise((resolve, reject) => {
    tmdb.discoverMovie(
      { media_type: "movie", time_window: "day" },
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          res.results.sort(() => Math.random() - 0.5);
          resolve(res);
        }
      }
    );
  });
  return promise;
};

export { getDiscoverMoviesResultPages, discoverMovies, getTrendingMovies };

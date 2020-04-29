const tmdb = require("moviedb")(process.env.REACT_APP_TMDB_API_KEY);
const Promise = require("bluebird");

const MINIMUM_VOTES = 5; 


const generateParams = (
  genre,
  country,
  startYear,
  endYear,
  averageRating,
  page
) => {
  return {
    page: page ? page : 1,
    with_genres: genre,
    region: country,
    "primary_release_date.gte": startYear ? parseInt(startYear) : undefined,
    "primary_release_date.lte": endYear ? parseInt(endYear) : undefined,
    "vote_count.gte": MINIMUM_VOTES,
    "vote_average.gte": averageRating ? parseInt(averageRating) : undefined,
  };
};

const discoverMovies = ({
  genre,
  country,
  startYear,
  endYear,
  averageRating,
  page,
}) => {
  const promise = new Promise((resolve, reject) => {
    tmdb.discoverMovie(
      generateParams(genre, country, startYear, endYear, averageRating, page),
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

const getDiscoverMoviesResultPages = ({
  genre,
  country,
  startYear,
  endYear,
  averageRating,
}) => {
  const promise = new Promise((resolve, reject) => {
    tmdb.discoverMovie(
      generateParams(genre, country, startYear, endYear, averageRating),
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

export { discoverMovies, getDiscoverMoviesResultPages };

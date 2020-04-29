const mdb = require("moviedb")(process.env.REACT_APP_TMDB_API_KEY);
const Promise = require("bluebird");

const discoverTv = ({ genre, country, averageRating }) => {
  const promise = new Promise((resolve, reject) => {
    mdb.discoverTv(
      {
        with_genres: genre,
        region: country,
        "vote_average.gte": averageRating ? parseInt(averageRating) : undefined,
      },
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

const getTrendingTv = () => {
  const promise = new Promise((resolve, reject) => {
    mdb.discoverTv({ media_type: "tv", time_window: "day" }, (err, res) => {
      if (err) {
        reject(err);
      } else {
        res.results.sort(() => Math.random() - 0.5);
        resolve(res);
      }
    });
  });
  return promise;
};

export { discoverTv, getTrendingTv };

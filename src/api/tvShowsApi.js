const Promise = require("bluebird");
const mdb = require("moviedb")(process.env.REACT_APP_TMDB_TVSHOWS_API_KEY);

const discoverTv = ({
    genre,
    rating
}) => {
    const promise = new Promise((resolve, reject) => {
        mdb.discoverTv({with_genres: genre, "vote_average.gte": rating ? parseInt(rating) : undefined },
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
        mdb.discoverTv({media_type: "tv", time_window: "day" },
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

export { discoverTv, getTrendingTv };

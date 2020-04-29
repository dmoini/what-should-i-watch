const apiHost = () => {};

const searchShows = () =>
  Promise.resolve({
    results: [
      {
        id: 12342,
        title: "Money Heist",
        first_aired: "2017-05-02",
        imdb_id: "tt6468322",
        tvdb: 327417,
        themoviedb: 71446,
        freebase: null,
        wikipedia_id: 53940712,
        tvrage_id: null,
        artwork_608x342:
          "http://d1wpny5kdj5pob.cloudfront.net/100117/thumbnails_xlarge/46746-5881144288-608x342.jpg"
      },
      {
        id: 32479,
        title: "Ozark",
        first_aired: "2017-07-21",
        imdb_id: "tt5071412",
        tvdb: 329089,
        themoviedb: 69740,
        freebase: null,
        wikipedia_id: 49545674,
        tvrage_id: null,
        artwork_608x342:
          "http://d1wpny5kdj5pob.cloudfront.net/091716/thumbnails_xlarge/44356-3609818295-608x342-show-thumbnail.jpg"
      },
      {
        id: 23048,
        title: "Stranger Things",
        first_aired: "2016-07-15",
        imdb_id: "tt4574334",
        tvdb: 305288,
        themoviedb: 1438,
        freebase: null,
        wikipedia_id: 46301800,
        tvrage_id: 48493,
        artwork_608x342:
          "http://static-api.guidebox.com/111615/thumbnails_xlarge/37760-6112872101-608x342-show-thumbnail.jpg"
      },
      {
        id: 4875,
        title: "The Office",
        first_aired: "2005-03-24",
        imdb_id: "tt0386676",
        tvdb: 73244,
        themoviedb: 2316,
        freebase: "/m/08jgk1",
        wikipedia_id: 2995553,
        tvrage_id: 6061,
        artwork_608x342:
          "http://d1wpny5kdj5pob.cloudfront.net/thumbnails_xlarge/205-657829540-608x342.jpg"
      },
      {
        id: 2396,
        title: "The Vampire Diaries",
        first_aired: "2009-09-10",
        imdb_id: "tt1405406",
        tvdb: 95491,
        themoviedb: 18165,
        freebase: "/m/05sy2k_",
        wikipedia_id: 22823014,
        tvrage_id: 21766,
        artwork_608x342:
          "http://d1wpny5kdj5pob.cloudfront.net/091414/thumbnails_xlarge/137-5309276460-608x342-show-thumbnail.jpg"
      },
    ],
  });

const searchMovies = () =>
  Promise.resolve({
    results: [
      {
        id: 32735,
        title: "Scott Pilgrim vs The World",
        themoviedb: 22538,
        imdb: "tt0446029",
        release_date: "2010-08-12",
        rating: "PG-13",
        rottentomatoes: 770782775,
        freebase: "/m/05t0_2v",
        wikipedia_id: 17574075,
        metacritic: "http://www.metacritic.com/movie/scott-pilgrim-vs-the-world",
        common_sense_media: "https://www.commonsensemedia.org/movie-reviews/scott-pilgrim-vs-the-world",
        poster_400x570:
          "http://d1wpny5kdj5pob.cloudfront.net/thumbnails_movies/12645-9004461625-98573319-6303411452-large-400x570.jpg"
      },
      {
        id: 548934,
        title: "Her",
        themoviedb: 152601,
        imdb: "tt1798709",
        release_date: "2013-12-18",
        rating: "R",
        rottentomatoes: 771356295,
        freebase: "/m/0lq6fb5",
        wikipedia_id: 36885907,
        metacritic: "http://www.metacritic.com/movie/her",
        common_sense_media: "https://www.commonsensemedia.org/movie-reviews/her",
        poster_400x570:
          "http://d1wpny5kdj5pob.cloudfront.net/120214/thumbnails_movies/-alt--90087-9091222044-9306269935-218700250-large-400x570-alt-.jpg"
      },
      {
        id: 457934,
        title: "Ferris Bueller's Day Off",
        themoviedb: 9377,
        imdb: "tt0091042",
        release_date: "1986-06-11",
        rating: "PG-13",
        rottentomatoes: 12224,
        freebase: "/m/0m491",
        wikipedia_id: 88326,
        metacritic: "http://www.metacritic.com/movie/ferris-buellers-day-off",
        common_sense_media: "https://www.commonsensemedia.org/movie-reviews/ferris-buellers-day-off",
        poster_400x570:
          "http://d1wpny5kdj5pob.cloudfront.net/thumbnails_movies/431-4225291074-9795354059-2651615888-large-400x570.jpg"
      },
      {
        id: 23857,
        title: "About Time",
        themoviedb: 122906,
        imdb: "tt2194499",
        release_date: "2013-08-16",
        rating: "R",
        rottentomatoes: 771312195,
        freebase: "/m/0pdb5jh",
        wikipedia_id: 0,
        metacritic: "http://www.metacritic.com/movie/about-time",
        common_sense_media: "https://www.commonsensemedia.org/movie-reviews/about-time",
        poster_400x570:
          "http://d1wpny5kdj5pob.cloudfront.net/120214/thumbnails_movies/-alt--22333-7694627554-9629329885-6691160397-large-400x570-alt-.jpg"
      },
      {
        id: 3486,
        title: "The Incredible 2", 
        themoviedb: 260513,
        imdb: "tt3606756",
        release_date: "2018-06-14",
        rating: "NR",
        rottentomatoes: 771432066,
        freebase: null,
        wikipedia_id: 39502474,
        metacritic: "http://www.metacritic.com/movie/incredibles-2",
        common_sense_media: "https://www.commonsensemedia.org/movie-reviews/incredibles-2",
        poster_400x570:
          "http://static-api.guidebox.com/100117/thumbnails_movies/159727-8319376409-2809245247-4105077391-large-400x570.jpg"
      },
    ],
  });

export { apiHost, searchMovies, searchShows };
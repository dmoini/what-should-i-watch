// Base url for `shows` is http://api-public.guidebox.com/v2

const apiHost = () => {};

const searchShows = () =>
  Promise.resolve({
    results: [
      {
        id: 14554,
        title: "Vikings",
        alternate_titles: [],
        container_show: 0,
        first_aired: "2013-03-03",
        imdb_id: "tt2306299",
        tvdb: 260449,
        themoviedb: 44217,
        freebase: "/m/0k3lwy1",
        wikipedia_id: 36355277,
        tvrage: {
          tvrage_id: 31136,
          link: "http://www.tvrage.com/shows/id-31136",
        },
        artwork_208x117:
          "http://static-api.guidebox.com/120214/thumbnails_small/14554-3064087210-208x117-show-thumbnail.jpg",
        artwork_304x171:
          "http://static-api.guidebox.com/120214/thumbnails_medium/14554-6577064837-304x171-show-thumbnail.jpg",
        artwork_448x252:
          "http://static-api.guidebox.com/120214/thumbnails_large/14554-6113301255-448x252-show-thumbnail.jpg",
        artwork_608x342:
          "http://static-api.guidebox.com/120214/thumbnails_xlarge/14554-1164331185-608x342-show-thumbnail.jpg",
      },
      {
        id: 48827,
        title: "World War Zero",
        alternate_titles: ["Élite"],
        container_show: 0,
        first_aired: "2017-02-23",
        imdb_id: "tt7134908",
        tvdb: 0,
        themoviedb: 76669,
        freebase: null,
        wikipedia_id: null,
        tvrage: {
          tvrage_id: null,
          link: null,
        },
        artwork_208x117:
          "http://static-api.guidebox.com/100117/thumbnails_small/48827-6407637037-208x117.jpg",
        artwork_304x171:
          "http://static-api.guidebox.com/100117/thumbnails_medium/48827-5299809058-304x171.jpg",
        artwork_448x252:
          "http://static-api.guidebox.com/100117/thumbnails_large/48827-4070429145-448x252.jpg",
        artwork_608x342:
          "http://static-api.guidebox.com/100117/thumbnails_xlarge/48827-7618919681-608x342.jpg",
      },
      {
        id: 7135,
        title: "The Wire",
        alternate_titles: [],
        container_show: 0,
        first_aired: "2002-06-02",
        imdb_id: "tt0306414",
        tvdb: 79126,
        themoviedb: 1438,
        freebase: "/m/0464pz",
        wikipedia_id: 1102458,
        tvrage: {
          tvrage_id: 6296,
          link: "http://www.tvrage.com/shows/id-6296",
        },
        artwork_208x117:
          "http://static-api.guidebox.com/thumbnails_small/7135-9287152509-208x117.jpg",
        artwork_304x171:
          "http://static-api.guidebox.com/thumbnails_medium/7135-7920276271-304x171.jpg",
        artwork_448x252:
          "http://static-api.guidebox.com/thumbnails_large/7135-5214426494-448x252.jpg",
        artwork_608x342:
          "http://static-api.guidebox.com/thumbnails_xlarge/7135-9837593720-608x342.jpg",
      },
      {
        id: 6969,
        title: "The Sopranos",
        alternate_titles: [],
        container_show: 0,
        first_aired: "1999-01-10",
        imdb_id: "tt0141842",
        tvdb: 75299,
        themoviedb: 1398,
        freebase: "/m/0kfv9",
        wikipedia_id: 78242,
        tvrage: {
          tvrage_id: 6206,
          link: "http://www.tvrage.com/shows/id-6206",
        },
        artwork_208x117:
          "http://static-api.guidebox.com/thumbnails_small/6969-3911711364-208x117.jpg",
        artwork_304x171:
          "http://static-api.guidebox.com/thumbnails_medium/6969-5320722591-304x171.jpg",
        artwork_448x252:
          "http://static-api.guidebox.com/thumbnails_large/6969-8300557150-448x252.jpg",
        artwork_608x342:
          "http://static-api.guidebox.com/thumbnails_xlarge/6969-7340823789-608x342.jpg",
      },
      {
        id: 57884,
        title: "Hunters",
        alternate_titles: ["Hunters (2020)"],
        container_show: 0,
        first_aired: "2020-02-21",
        imdb_id: "tt7456722",
        tvdb: 372081,
        themoviedb: 0,
        freebase: null,
        wikipedia_id: null,
        tvrage: {
          tvrage_id: null,
          link: null,
        },
        artwork_208x117:
          "http://static-api.guidebox.com/100117/thumbnails_small/57884-7132083429-208x117.jpg",
        artwork_304x171:
          "http://static-api.guidebox.com/100117/thumbnails_medium/57884-742324978-304x171.jpg",
        artwork_448x252:
          "http://static-api.guidebox.com/100117/thumbnails_large/57884-2572981757-448x252.jpg",
        artwork_608x342:
          "http://static-api.guidebox.com/100117/thumbnails_xlarge/57884-4372686688-608x342.jpg",
      },
    ],
  });

const searchMovies = () =>
  Promise.resolve({
    results: [
      {
        id: 159727,
        title: "The Invisible Man",
        release_year: 2018,
        themoviedb: 337169,
        original_title: "The Invisible Man",
        alternate_titles: [],
        imdb: "tt1051906",
        pre_order: false,
        in_theaters: false,
        release_date: "2018-04-17",
        rating: "NR",
        rottentomatoes: 0,
        freebase: "",
        wikipedia_id: 0,
        metacritic: null,
        common_sense_media: null,
        poster_120x171:
          "http://static-api.guidebox.com/100117/thumbnails_movies_small/159727-8801342761-4066019920-1345254723-small-120x171.jpg",
        poster_240x342:
          "http://static-api.guidebox.com/100117/thumbnails_movies_medium/159727-6848356584-1650429801-5701544536-medium-240x342.jpg",
        poster_400x570:
          "http://static-api.guidebox.com/100117/thumbnails_movies/159727-8319376409-2809245247-4105077391-large-400x570.jpg",
      },
      {
        id: 1617,
        title: "The Passion of the Christ",
        release_year: 2004,
        themoviedb: 615,
        original_title: "The Passion of the Christ",
        alternate_titles: [
          "The Passion Of The Christ Definitive Edition",
          "Passion of the Christ, The",
          "The Passion of the Christ (2004)",
          "The Passion",
          "The Passion of Christ",
          "The Passion Recut",
        ],
        imdb: "tt0335345",
        pre_order: false,
        in_theaters: false,
        release_date: "2004-02-25",
        rating: "R",
        rottentomatoes: 12891,
        freebase: "/m/01br2w",
        wikipedia_id: 195246,
        metacritic: "http://www.metacritic.com/movie/the-passion-of-the-christ",
        common_sense_media:
          "https://www.commonsensemedia.org/movie-reviews/the-passion-of-the-christ",
        poster_120x171:
          "http://static-api.guidebox.com/120214/thumbnails_movies_small/1617-6259131124-2044912647-3517381251-small-120x171-alt-.jpg",
        poster_240x342:
          "http://static-api.guidebox.com/120214/thumbnails_movies_medium/1617-7766946321-2955946187-6943964734-medium-240x342-alt-.jpg",
        poster_400x570:
          "http://static-api.guidebox.com/120214/thumbnails_movies/-alt--1617-1175553590-1626934088-3160291887-large-400x570-alt-.jpg",
      },
      {
        id: 172052,
        title: "Midsommar",
        release_year: 2019,
        themoviedb: 530385,
        original_title: "Midsommar",
        alternate_titles: [
          "Midsommar Director's Cut",
          "Midsommar (Commentary Version)",
          "Midsummer",
          "Midsommar (4K UHD)",
        ],
        imdb: "tt8772262",
        pre_order: false,
        in_theaters: false,
        release_date: "2019-07-03",
        rating: "R",
        rottentomatoes: 771504340,
        freebase: "",
        wikipedia_id: 58032225,
        metacritic:
          "http://www.metacritic.com/https://www.metacritic.com/movie/midsommar",
        common_sense_media:
          "https://www.commonsensemedia.org/movie-reviews/midsommar",
        poster_120x171:
          "http://static-api.guidebox.com/100117/thumbnails_movies_small/172052-7939682943-3051673109-273224656-small-120x171.jpg",
        poster_240x342:
          "http://static-api.guidebox.com/100117/thumbnails_movies_medium/172052-5821764506-2734788549-7699393155-medium-240x342.jpg",
        poster_400x570:
          "http://static-api.guidebox.com/100117/thumbnails_movies/172052-3780710520-8723092307-4108234583-large-400x570.jpg",
      },
      {
        id: 9863,
        title: "The Greatest Story Ever Told",
        release_year: 1965,
        themoviedb: 2428,
        original_title: "The Greatest Story Ever Told",
        alternate_titles: [
          "Greatest Story Ever Told, The",
          "The Greatest Story Ever Told [HD]",
        ],
        imdb: "tt0059245",
        pre_order: false,
        in_theaters: false,
        release_date: "1965-02-15",
        rating: "G",
        rottentomatoes: 9813,
        freebase: "/m/01wb95",
        wikipedia_id: 327427,
        metacritic: null,
        common_sense_media: null,
        poster_120x171:
          "http://static-api.guidebox.com/120214/thumbnails_movies_small/9863-4725610311-121578621-3267369536-small-120x171-alt-.jpg",
        poster_240x342:
          "http://static-api.guidebox.com/120214/thumbnails_movies_medium/9863-6456272746-7146882345-3672528444-medium-240x342-alt-.jpg",
        poster_400x570:
          "http://static-api.guidebox.com/120214/thumbnails_movies/-alt--9863-4673151942-5569167645-2676360617-large-400x570-alt-.jpg",
      },
      {
        id: 178057,
        title: "Cats",
        release_year: 2019,
        themoviedb: 536869,
        original_title: "Cats",
        alternate_titles: ["Cats (2019)"],
        imdb: "tt5697572",
        pre_order: false,
        in_theaters: true,
        release_date: "2019-12-19",
        rating: "NR",
        rottentomatoes: 771497859,
        freebase: "",
        wikipedia_id: 50446420,
        metacritic:
          "http://www.metacritic.com/https://www.metacritic.com/movie/cats",
        common_sense_media:
          "https://www.commonsensemedia.org/movie-reviews/cats",
        poster_120x171:
          "http://static-api.guidebox.com/100117/thumbnails_movies_small/178057-5099461908-1706458233-777403764-small-120x171.jpg",
        poster_240x342:
          "http://static-api.guidebox.com/100117/thumbnails_movies_medium/178057-7067813352-8465362060-8075566524-medium-240x342.jpg",
        poster_400x570:
          "http://static-api.guidebox.com/100117/thumbnails_movies/-178057-397047224-6918693823-4688154818-large-400x570.jpg",
      },
    ],
  });

export { apiHost, searchMovies, searchShows };

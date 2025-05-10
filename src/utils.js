const API_KEY = import.meta.env.VITE_API_KEY;
export const GET_CONFIG = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    accept: 'application/json',
  },
};

const TITLE = 'Title';
const RELEASE_DATE = 'Release Date';
const RATING = 'Rating';
export const SORT_OPTIONS = [TITLE, RELEASE_DATE, RATING];

export const sortMovies = (movies, sortBy) => {
  return movies
    .filter(
      (movie, idx, self) => idx === self.findIndex((m) => m.id === movie.id),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case TITLE:
          return a.title.localeCompare(b.title);
        case RELEASE_DATE:
          return b.release_date.localeCompare(a.release_date);
        case RATING:
          return b.vote_average - a.vote_average;
      }
    });
};

export const mkPosterPath = (path, size = 200) => {
  const baseUrl = 'https://image.tmdb.org/t/p/';
  return `${baseUrl}w${size}${path}`;
};

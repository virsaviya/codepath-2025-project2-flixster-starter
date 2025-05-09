const API_KEY = import.meta.env.VITE_API_KEY;
export const GET_CONFIG = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    accept: 'application/json',
  },
};

export const mkPosterPath = (path, size = 200) => {
  const baseUrl = 'https://image.tmdb.org/t/p/';
  return `${baseUrl}w${size}${path}`;
};

export const sortMovies = (movies, sortBy) => {
  return movies.filter(
    (movie, idx, self) => idx === self.findIndex((m) => m.id === movie.id),
  );
};

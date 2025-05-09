export const mkPosterPath = (path) => {
  const baseUrl = 'https://image.tmdb.org/t/p/';
  const size = 'w200';

  return `${baseUrl}${size}${path}`;
};

export const sortMovies = (movies, sortBy) => {
  return movies.filter(
    (movie, idx, self) => idx === self.findIndex((m) => m.id === movie.id),
  );
};

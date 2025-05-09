export const mkPosterPath = (path) => {
  const baseUrl = 'https://image.tmdb.org/t/p/';
  const size = 'w200';

  return `${baseUrl}${size}${path}`;
};

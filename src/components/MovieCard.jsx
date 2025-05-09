import { useState } from 'react';

import { mkPosterPath } from '../utils';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={mkPosterPath(movie.poster_path)} />
      <div>{movie.title}</div>
      <div>{movie.vote_average}</div>
      <div>{movie.release_date}</div>
    </div>
  );
};

export default MovieCard;

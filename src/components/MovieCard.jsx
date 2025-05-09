import { useState } from 'react';

import { mkPosterPath } from '../utils';
import './MovieCard.css';

const MovieCard = ({ movie, handleCardClick }) => {
  return (
    <div onClick={() => handleCardClick(movie.id)}>
      <img
        alt={`poster for ${movie.title}`}
        src={mkPosterPath(movie.poster_path)}
      />
      <div>{movie.title}</div>
      <div>{movie.vote_average.toFixed(1)}</div>
      <div>{movie.release_date}</div>
    </div>
  );
};

export default MovieCard;

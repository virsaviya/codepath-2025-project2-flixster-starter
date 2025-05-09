// import { useState, useEffect } from 'react';

import MovieCard from './MovieCard';
import { sortMovies } from '../utils';
import './MovieList.css';

const MovieList = ({ movies, handleCardClick }) => {
  return (
    <div className='movie-list'>
      {sortMovies(movies).map((m) => (
        <MovieCard key={m.id} movie={m} handleCardClick={handleCardClick} />
      ))}
    </div>
  );
};

export default MovieList;

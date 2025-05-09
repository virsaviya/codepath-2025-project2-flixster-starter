// import { useState, useEffect } from 'react';

import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className='movie-list'>
      {movies.map((m) => (
        <MovieCard key={`movie-${m.id}`} movie={m} />
      ))}
    </div>
  );
};

export default MovieList;

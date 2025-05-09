// import { useState, useEffect } from 'react';

import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies?.map((m) => (
        <MovieCard movie={m} />
      ))}
    </div>
  );
};

export default MovieList;

import { useState, useEffect, useCallback } from 'react';

import MovieList from './MovieList';
import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [dateRange, setDateRange] = useState(null);
  const [nextPage, setNextPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const getMovies = useCallback(async () => {
    setFetching(true);
    setError(null);
    const endpoint = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${nextPage}`;

    try {
      const resp = await fetch(endpoint, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          accept: 'application/json',
        },
      });

      if (!resp.ok) setError(`HTTP error: ${resp.status}`);
      const data = await resp.json();
      setDateRange([data.dates.minimum, data.dates.maximum]);
      setNextPage(data.page <= data.total_pages ? data.page + 1 : null);
      setMovies([...movies, ...data.results]);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
    setFetching(false);
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const handleLoadMore = (e) => {
    e.preventDefault();
    getMovies();
  };

  return (
    <div className='App'>
      <header>Flixter</header>
      <div>Search coming soon</div>
      <div>Sort coming soon</div>
      {error && <div>{error}</div>}
      {fetching ? <div>loading...</div> : <MovieList movies={movies} />}
      <button disabled={nextPage === null} onClick={handleLoadMore}>
        {nextPage ? 'more' : 'no more left'}
      </button>
    </div>
  );
};

export default App;

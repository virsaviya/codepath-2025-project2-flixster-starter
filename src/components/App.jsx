import { useState, useEffect, useCallback } from 'react';

import MovieList from './MovieList';
import Search from './Search';
import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [showNowPlaying, setShowNowPlaying] = useState(true);

  const getMovies = useCallback(
    async (page = 1, search = '') => {
      setFetching(true);
      setError(null);
      const baseUrl = 'https://api.themoviedb.org/3/';
      const endpoint = search
        ? `${baseUrl}search/movie?query=${search}&page=${page}`
        : `${baseUrl}movie/now_playing?language=en-US&page=${page}`;
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
        setMovies((prevMovies) =>
          page === 1 ? data.results : [...prevMovies, ...data.results],
        );
        setNextPage(data.page < data.total_pages ? data.page + 1 : null);
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError('Error fetching data');
      } finally {
        setFetching(false);
      }
    },
    [showNowPlaying],
  );

  useEffect(() => {
    setNextPage(1);
    setMovies([]);
    setShowNowPlaying(query === '');
    if (query !== '') getMovies(1, query);
  }, [query]);

  useEffect(() => {
    if (showNowPlaying) getMovies();
  }, [showNowPlaying, getMovies]);

  const handleLoadMore = (e) => {
    e.preventDefault();
    getMovies(nextPage, query);
  };

  const handleNowPlaying = (e) => {
    console.log('handling now playing');
    setMovies([]);
    setShowNowPlaying(true);
  };

  return (
    <div className='App'>
      <header>Flixter</header>
      <Search handleSearch={(e) => setQuery(e.target.value)} />
      <button onClick={handleNowPlaying}>Now Playing</button>
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

import { useState, useEffect } from 'react';

import MovieList from './MovieList';
import './App.css';

const App = () => {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [dateRange, setDateRange] = useState(null);
  const [page, setPage] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    console.log('1.  ', { dateRange, page, movies });
  }, [movies, dateRange, page]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    setFetching(true);
    const apiKey = import.meta.env.VITE_API_KEY;
    const pageToFetch = page ? page + 1 : 1;
    const endpoint = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageToFetch}`;

    try {
      const resp = await fetch(endpoint, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          accept: 'application/json',
        },
      });

      if (!resp.ok) throw new Error(`HTTP error: ${resp.status}`);
      const data = await resp.json();
      setDateRange([data.dates.minimum, data.dates.maximum]);
      setPage({ curr: data.page, total: data.total_pages });
      setMovies(data.results);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
    setFetching(false);
  };

  const handleLoadMore = (e) => {
    console.log('Handling more...', e.target.value);
  };

  return (
    <div className='App'>
      <header>Flixter</header>
      <div>Search coming soon</div>
      <div>Sort coming soon</div>
      {fetching ? <div>loading...</div> : <MovieList movies={movies} />}
      <button onClick={handleLoadMore}>more</button>
    </div>
  );
};

export default App;

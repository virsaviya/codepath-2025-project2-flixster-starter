import { useState, useEffect, useCallback } from 'react';

import Header from './Header';
import Modal from './Modal';
import MovieList from './MovieList';
import { GET_CONFIG, sortMovies } from '../utils';
import './App.css';

const BASE_URL = 'https://api.themoviedb.org/3/';

const App = () => {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [showNowPlaying, setShowNowPlaying] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  const getMovies = useCallback(
    async (page = 1, search = '') => {
      setFetching(true);
      setError(null);
      const endpoint = search
        ? `${BASE_URL}search/movie?query=${search}&page=${page}`
        : `${BASE_URL}movie/now_playing?language=en-US&page=${page}`;
      try {
        const resp = await fetch(endpoint, GET_CONFIG);
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

  const getMovieDetails = async (id) => {
    setError(null);
    try {
      const endpoint = `${BASE_URL}movie/${id}?language=en-US`;
      const resp = await fetch(endpoint, GET_CONFIG);
      if (!resp.ok) setError(`HTTP error: ${resp.status}`);
      const data = await resp.json();
      setMovieDetails(data);
      console.log(data);
    } catch (err) {
      console.error('Error fetching movies:', err);
      setError('Error fetching data');
    }
  };

  useEffect(() => {
    setNextPage(1);
    setMovies([]);
    setShowNowPlaying(query === '');
    if (query !== '') getMovies(1, query);
  }, [query]);

  useEffect(() => {
    if (showNowPlaying) getMovies();
  }, [showNowPlaying, getMovies]);

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModal);
    return () => {
      document.removeEventListener('keydown', handleCloseModal);
    };
  }, []);

  const handleLoadMore = (e) => {
    e.preventDefault();
    getMovies(nextPage, query);
  };

  const handleNowPlaying = () => {
    if (!showNowPlaying) {
      setMovies([]);
      setShowNowPlaying(true);
    }
  };

  const handleCardClick = (id) => {
    setShowModal(true);
    getMovieDetails(id);
  };

  const handleCloseModal = (e) => {
    const isCloseButton = e.target.closest('.close');
    const isOutsideClick = e?.target.dataset.modalContainer === 'true';
    const isEscKey = e?.key === 'Escape';
    if (isOutsideClick || isCloseButton || isEscKey) {
      setShowModal(false);
      setMovieDetails(null);
    }
  };

  const handleSort = (sortBy) => {
    setMovies(sortMovies(movies, sortBy));
  };

  return (
    <div className='app'>
      {showModal && (
        <Modal movie={movieDetails} closeModal={handleCloseModal} />
      )}
      <Header
        handleSearch={(e) => setQuery(e.target.value)}
        handleNowPlaying={handleNowPlaying}
        handleSort={handleSort}
      />
      {error && <div>{error}</div>}
      {fetching ? (
        <div>loading...</div>
      ) : (
        <MovieList movies={movies} handleCardClick={handleCardClick} />
      )}
      <button disabled={nextPage === null} onClick={handleLoadMore}>
        {nextPage ? 'more' : 'no more left'}
      </button>
    </div>
  );
};

export default App;

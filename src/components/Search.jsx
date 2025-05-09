import { useState } from 'react';

import { mkPosterPath } from '../utils';
// import './Search.css';

const Search = ({ handleSearch }) => {
  return (
    <>
      <input type='search' onChange={handleSearch} placeholder='Search' />
      <button>
        <i className='fa-solid fa-magnifying-glass' />
      </button>
    </>
  );
};

export default Search;

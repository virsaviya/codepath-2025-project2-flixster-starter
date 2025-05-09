const Search = ({ handleSearch }) => {
  return (
    <div>
      <input type='search' onChange={handleSearch} placeholder='Search' />
      <button>
        <i className='fa-solid fa-magnifying-glass' />
      </button>
    </div>
  );
};

export default Search;

import Search from './Search';
import './Header.css';
import SortDropdown from './SortDropdown';

const Header = ({ handleSearch, handleNowPlaying, handleSort }) => {
  return (
    <header>
      <h1>Flixter</h1>
      <div className='nav'>
        <button onClick={handleNowPlaying}>Now Playing</button>
        <SortDropdown handleSort={handleSort} />
        <Search handleSearch={handleSearch} />
      </div>
    </header>
  );
};

export default Header;

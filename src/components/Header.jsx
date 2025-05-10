import Search from './Search';
import './Header.css';
import SortDropdown from './SortDropdown';

const Header = ({ handleSearch, handleNowPlaying, handleSort }) => {
  return (
    <header>
      <h1>Flixter</h1>
      <div className='nav'>
        <Search handleSearch={handleSearch} />
        <SortDropdown handleSort={handleSort} />
        <button onClick={handleNowPlaying}>Now Playing</button>
      </div>
    </header>
  );
};

export default Header;

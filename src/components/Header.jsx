import Search from './Search';
import './Header.css';

const Header = ({ handleSearch, handleNowPlaying }) => {
  return (
    <header>
      <h1>Flixter</h1>
      <div className='nav'>
        <button onClick={handleNowPlaying}>Now Playing</button>
        <button>Sort coming soon</button>
        <Search handleSearch={handleSearch} />
      </div>
    </header>
  );
};

export default Header;

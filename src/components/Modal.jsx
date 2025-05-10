import { mkPosterPath } from '../utils';
import './Modal.css';

const Modal = ({ movie, closeModal }) => {
  const genres = movie?.genres?.map((g) => g.name).join(', ');
  const handleMissingImg = (e) => {
    e.target.src = 'https://place-hold.it/400x600/09a875?text=Poster is MIA';
  };
  return (
    <div
      className='modal-container'
      data-modal-container={true}
      onClick={closeModal}>
      <div className='modal'>
        <div className='header'>
          <button className='close' onClick={closeModal}>
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>
        {movie && (
          <div className='body'>
            <img
              alt={`poster for ${movie.title}`}
              src={mkPosterPath(movie.poster_path, 400)}
              onError={handleMissingImg}
            />
            <h2>{movie.title}</h2>
            <div className='details'>
              <div>
                <p>Released: {movie.release_date}</p>
                <p>Runtime: {movie.runtime} min</p>
                <p className='genres'>Genres: {genres}</p>
              </div>
              <h4>
                {movie.vote_average.toFixed(1)}
                <i class='fa-solid fa-star' />
              </h4>
            </div>
            <h5>{movie.overview}</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

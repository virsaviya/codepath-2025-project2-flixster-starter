import { mkPosterPath } from '../utils';
import './Modal.css';

const Modal = ({ movie, closeModal }) => {
  const genres = movie?.genres?.map((g) => g.name).join(' ');
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
            />
            <div>{movie.title}</div>
            <div>{movie.vote_average.toFixed(1)}</div>
            <div>{movie.runtime}</div>
            <div>{movie.release_date}</div>
            <p>{movie.overview}</p>
            <div className='genres'>{genres}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

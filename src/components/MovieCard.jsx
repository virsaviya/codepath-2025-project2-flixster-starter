import { mkPosterPath } from '../utils';

const MovieCard = ({ movie, handleCardClick }) => {
  const handleMissingImg = (e) => {
    e.target.src = 'https://place-hold.it/200x300/09a875?text=Poster is MIA';
  };
  return (
    <div onClick={() => handleCardClick(movie.id)}>
      <img
        alt={`poster for ${movie.title}`}
        src={mkPosterPath(movie.poster_path)}
        onError={handleMissingImg}
      />
      <h3>{movie.title}</h3>
      <h4>
        {movie.vote_average.toFixed(1)}
        <i class='fa-solid fa-star' />
      </h4>
      <p>Released {movie.release_date}</p>
    </div>
  );
};

export default MovieCard;

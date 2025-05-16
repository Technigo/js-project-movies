import './Card.css';
import { Link } from 'react-router'


const Card = ({ movie }) => {
  return (
    <div className="card">
      <Link to={`/movies/${movie.id}`}>
        <h2>{movie.title}</h2>
        <p> Released date: {movie.release_date} </p>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </Link >
    </div>
  );

}

export default Card;
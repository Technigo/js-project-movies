import './Card.css';
import { Link } from 'react-router'


const Card = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="card">
        <h2>{movie.title}</h2>
      </div>
    </Link >
  );

}

export default Card;
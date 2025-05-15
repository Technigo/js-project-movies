import './Card.css';
import { Link } from 'react-router'


const Card = ({ movie }) => {
  return (
    <Link to={`/movies/${movie}`}>
      <div className="card">
        <h2>{movie}</h2>
      </div>
    </Link >
  );

}

export default Card;
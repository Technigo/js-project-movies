import './Card.css';
import { Link } from 'react-router'


const Card = ({ movie }) => {
  return (
    <div className="card">
      <Link to={`/movies/${movie.id}`}>
        <h2>{movie.title}</h2>
        <p> Released date: {movie.release_date} </p>
        {/* <img> </img> */}
      </Link >
    </div>
  );

}

export default Card;
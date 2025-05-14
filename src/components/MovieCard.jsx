import {Link} from 'react-router'

const MovieCard = ({ movieTitle }) => {
  return (
    <Link to={`/movies/${movieTitle}`}>
      <div>{movieTitle}</div>
    </Link>
  )
};

export default MovieCard;

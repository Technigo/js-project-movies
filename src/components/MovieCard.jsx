import {Link} from 'react-router'
import styled from 'styled-components';


const MoviePoster = styled.img`
  width: 100%;

  @media (min-width: 425px) {
    width: 50%;
  }
  
  @media (min-width: 769px) {
    width: 33%;
  }
`

const MovieCard = ({ movieTitle, id, poster }) => {
  return (
    <Link to={`/movies/${id}`}>
        <MoviePoster 
          src={`https://image.tmdb.org/t/p/w342${poster}`}
          alt={movieTitle}/>
    </Link>
  )
};

export default MovieCard;

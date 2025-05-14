import styled from 'styled-components'
import { Link } from "react-router-dom"

const CardContainer = styled.div`
  background-image: ${({ backdrop }) => `url(https://image.tmdb.org/t/p/w1280${backdrop})`};
  background-size: cover;
  background-position: center;
  height: 600px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 300px; */

  background-color: #333;
 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: auto;
  }
  p {
    font-size: 1.2em;
    text-align: center;
  }
`


const Card = ({ movie }) => {
  return (
//Jasmin added link so that the card on homepage movies links to the moviedetail
    <Link to={`/movies/${movie.id}`}> 
    <CardContainer backdrop={movie.poster_path}>
      <h2>{movie.title}</h2>
      {/* <img 
        src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}
        alt={movie.title}
      /> */}
      <p>{movie.release_date}</p>
    </CardContainer>
    </Link>
  )
}
export default Card
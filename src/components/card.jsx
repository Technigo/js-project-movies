import styled from 'styled-components'
import { Link } from "react-router-dom"

const CardContainer = styled.div`
position: relative;
  background-image: ${({ backdrop }) => `url(https://image.tmdb.org/t/p/w1280${backdrop})`};
  background-size: cover;
  background-position: center;
  height: 600px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 

  background-color: #333;
 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1);
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6); 
  color: white;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1rem;
  transition: opacity 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 1;
  }

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
  }
`


const Card = ({ movie }) => {
  return (
    
    <Link to={`/movies/${movie.id}`}>
      <CardContainer backdrop={movie.poster_path}>
        <Overlay>
          <h1>{movie.title}</h1>
          <p>Released {movie.release_date}</p>
        </Overlay>
      </CardContainer>
    </Link>
  )
}
export default Card
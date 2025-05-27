import styled from 'styled-components'
import { Link } from "react-router-dom"

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

const PosterImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: filter 0.3s ease;

  ${CardContainer}:hover & {
    filter: brightness(0.5);
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 1;
  }

  h2 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }
`

const Card = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <CardContainer>
        <PosterImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <Overlay>
          <h2>{movie.title}</h2>
          <p>Released {movie.release_date}</p>
        </Overlay>
      </CardContainer>
    </Link>
  )
}

export default Card

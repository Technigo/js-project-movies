import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const CardWrapper = styled.div`
  background-color: #1f1f1f;  // Mörk bakgrund
  color: white;
  border: 1px solid #333;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 767px) {
    padding: 0.5rem;
  }
`


const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`

const Title = styled.p`
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`

const Card = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w342${movie.poster_path}`

  return (
    <StyledLink to={`/movies/${movie.id}`}>
      <CardWrapper>
        <Poster
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={`Poster of ${movie.title}`}
          loading="lazy"
        />

        <Title>{movie.title}</Title>
      </CardWrapper>
    </StyledLink>
  )
}

export default Card

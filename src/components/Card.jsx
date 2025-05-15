import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const CardWrapper = styled.div`
  background-color: bisque;
  border: 2px solid;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;
  border-radius: 4px;

  &:hover {
    transform: scale(1.03);
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
        <Poster src={posterUrl} alt={`Poster of ${movie.title}`} />
        <Title>{movie.title}</Title>
      </CardWrapper>
    </StyledLink>
  )
}

export default Card

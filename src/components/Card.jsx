import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`

const CardWrapper = styled.div`
  background-color: #1f1f1f;
  color: white;
  border: 1px solid #333;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  width: 190px;
  height: auto;
  margin: 0 auto;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 767px) {
    padding: 0.5rem;
  }
`

const Poster = styled.img`
  width: 190px;
  height: 254px;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`

const Title = styled.p`
  margin-top: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  color: white;

  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`

const Card = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : '/images/fallback.png'

  return (
    <StyledLink to={`/movies/${movie.id}`} aria-label={`Open details for ${movie.title}`}>
      <CardWrapper>
        <Poster
          src={posterUrl}
          alt={`Poster of ${movie.title}`}
          width="190"
          height="254"
          loading="lazy"
        />
        <Title>{movie.title}</Title>
      </CardWrapper>
    </StyledLink>
  )
}

export default Card

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useHover } from '../hooks/useHover'
import { device } from '../styles/media.js'

export const StyledCard = styled.div`
  position: relative;
  display: block;
  width: 100%;
  max-width: 150px;
  overflow: hidden;
  border: 1px solid black;
  font-size: 0.8rem;

  ${device.tablet} {
    max-width: 200px;
  }

  ${device.laptop} {
    position: relative;
    display: block;
    width: 100%;
    max-width: 240px;
    overflow: hidden;
    border: 3px solid black;
  }

  &hover {
    transform: translateY(-5px);
  }
  .cardContainer {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .moviePoster {
    width: 100%;
    display: block;
  }

  .cardOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0.5rem;
    box-sizing: border-box;
    color: white;

    ${device.tablet} {
      padding: 1.5rem;
    }
  }

  .movieTitle {
    font-size: 0.8rem;
    margin: 0 0 0.5rem;
    font-weight: bold;

    ${device.tablet} {
      font-size: 1.2rem;
    }
  }

  .movieRelease {
    font-size: 0.6rem;
    margin: 0 0 0.5rem;
    opacity: 0.9;

    ${device.tablet} {
      font-size: 0.9rem;
    }
  }

  .movieRating {
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    ${device.tablet} {
      font-size: 1rem;
    }
  }

  .movieRating span {
    color: gold;
  }
`

// Create Card component that takes a movie object as a prop
export const Card = ({ movie }) => {
  const [isHovering, hoverProps] = useHover()

  if (!movie) {
    return <div>Loading movie...</div>
  }

  return (
    <StyledCard>
      <Link to={`/movies/${movie.title}`}>
        <div className='cardContainer' {...hoverProps}>
          {/* The movie poster */}
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={`Poster for ${movie.title}`}
            className='moviePoster'
          />

          {/* Overlay that appears on hover */}
          {isHovering && (
            <div className='cardOverlay'>
              <h2 className='movieTitle'>{movie.title}</h2>
              <p className='movieRelease'>Released: {movie.release_date}</p>
              <div className='movieRating'>
                <span>★</span> {movie.vote_average.toFixed(1)}/10
              </div>
            </div>
          )}
        </div>
      </Link>
    </StyledCard>
  )
}

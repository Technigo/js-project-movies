import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useHover } from '../hooks/useHover'
import { device } from '../styles/media.js'
import { Loader } from './Loader.jsx'

export const StyledCard = styled.div`
  position: relative;
  display: block;
  width: 50%;
  max-width: none;
  overflow: hidden;
  border: none;
  font-size: 0.8rem;
  margin-bottom: 0rem;
  padding: 0rem;
  box-sizing: border-box;

  ${device.tablet} {
    width: 25%;
  }

  ${device.laptop} {
    width: 20%;
  }

  &:hover {
    transform: translateY(-0px);
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
    return <Loader />
  }

  return (
    <StyledCard>
      <Link to={`/movies/${movie.id}`}>
        <div className='cardContainer' {...hoverProps}>
          {/* The movie poster */}
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={`Poster for ${movie.id}`}
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

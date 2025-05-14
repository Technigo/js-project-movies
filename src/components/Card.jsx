import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useHover } from '../hooks/useHover'

export const StyledCard = styled.div`
  position: relative;
  display: block;
  width: 100%;
  max-width: 342px;

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
    padding: 1.5rem;
    box-sizing: border-box;
    color: white;
  }

  .movieTitle {
    font-size: 1.2rem;
    margin: 0 0 0.5rem;
    font-weight: bold;
  }

  .movieRelease {
    font-size: 0.9rem;
    margin: 0 0 0.5rem;
    opacity: 0.9;
  }

  .movieRating {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .movieRating span {
    color: gold;
  }
`

// Create Card component that takes a movie object as a prop
// First it only displays the poster image but on hover it displays a darker overlay with the title, release date and rating

// The movie object should contain the following properties: title, release_date, vote_average, poster_path
// The movie object should be passed as a prop to the Card component

export const Card = ({ movie }) => {
  const [isHovering, hoverProps] = useHover()

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

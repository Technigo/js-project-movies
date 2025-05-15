import {Link} from 'react-router'
import styled from 'styled-components'
import { useState } from 'react'

const MovieContainer = styled.div`
  position: relative;
  width: 100%;
  
  @media (min-width: 425px) {
    width: 50%;
  }

  @media (min-width: 769px) {
    width: 33.33%;
  }
`

const MoviePoster = styled.img`
  width: 100%;

`

const HoverCard = styled.div`
   background: rgba(0, 0, 0, 0.75);
   color: white;
   position: absolute;
   inset: 0;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: end;
   align-items: start;
   padding: 20px;
   opacity: 1;
   transition: opacity 0.3s ease;
`

const MovieCard = ({ movieTitle, id, poster, releaseDate }) => {

  const [ isHovered, setIsHovered ] = useState(false)

  const HandleMouseOver = () => setIsHovered(true)
  const HandleMouseOut = () => setIsHovered(false)

  return (
    <Link to={`/movies/${id}`}>
      <MovieContainer
        onMouseEnter={HandleMouseOver}
        onMouseLeave={HandleMouseOut}
        >

        <MoviePoster 
          src={`https://image.tmdb.org/t/p/w342${poster}`}
          alt={movieTitle}
          />
          
          {isHovered &&  (<HoverCard>
            <h2>{movieTitle}</h2>
            <p>Released {releaseDate}</p>
          </HoverCard>
        )}

      </MovieContainer>
    </Link>
  )
};

export default MovieCard

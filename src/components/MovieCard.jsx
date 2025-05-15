import {Link} from 'react-router'
import styled from 'styled-components'
import { useState } from 'react'

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
`

const MovieContainer = styled.div`
  width: 100%;
  background: black;
  
  @media (min-width: 425px) {
    width: 50%;
  }

  @media (min-width: 769px) {
    width: 33.33%;
  }
`

const MoviePoster = styled.img`
  width: 100%;
  display: block;
  height: auto;
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
    <MovieContainer
      onMouseEnter={HandleMouseOver}
      onMouseLeave={HandleMouseOut}>
      
    <StyledLink to={`/movies/${id}`}>
      
      <MoviePoster 
        src={`https://image.tmdb.org/t/p/w342${poster}`}
        alt={movieTitle}
        />
          
        {isHovered &&  (<HoverCard>
          <h2>{movieTitle}</h2>
          <p>Released {releaseDate}</p>
        </HoverCard>
        )}

      </StyledLink> 
    </MovieContainer>
  )
};

export default MovieCard

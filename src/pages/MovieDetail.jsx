import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link, useParams } from "react-router-dom"

const BackLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-bottom: 16px;
  align-items: right;
  margin-left: 15px;
  top: 10px;
  left: 20px;

  @media (min-width: 668px) {
  position: absolute;
  }

`
const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%), url(${props => props.$backgroundUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  position: relative; 
  margin: 0; 
  padding: 0;
  color: white;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  align-items: end;
  padding: 8px;
  min-height: 100vh;
  backdrop-filter: brightness(0.6);
  gap: 10px;


  @media (min-width: 668px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    align-items: end;
    justify-items: start;
    padding: 50px;
    gap: 20px;
  }

`
const Poster = styled.img`
  width: 200px;
  border: 5px solid var(--color-border);
  max-width: 300px;
  box-shadow: 4px 6px 10px rgba(0,0,0,0.8);
  margin: 0 auto;


  @media (min-width: 668px) {
   width: 250px;
   max-width: 250px;
   justify-self: start;
   margin: 0;
  
  
  }

  @media (min-width: 1024px) {
    width: 300px;
    max-width: 300px;
      }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  max-width: 300px;
  width: 100%;
  

  @media (min-width: 668px) {
    max-width: 300px;
    align-items: flex-start;
    text-align: left;
    justify-self: start;
  }
`
const HeadText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 16px;
 
`
const Description = styled.p`
  margin-bottom: 16px;
  text-align: left;
  padding: 0 16px;
  
`

const MovieDetail = () => {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error)
        setLoading(false)
      })
  }, [id, apiKey])

  if (loading) {
    return <p>Loading movie details...</p>
  }

  if (!movie) {
    return <p>Movie not found. Try again.</p>
  }

  return (
    <>
      <main aria-label="Movie Details">
      <Background $backgroundUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
        <Container>
        <BackLink to="/"> ⬅ Back to Movies</BackLink>
          {movie.poster_path && (
            <Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          <InfoWrapper>
            <HeadText>
              <h1>{movie.title}</h1>
              <p>⭐ {movie.vote_average}</p>
            </HeadText>
            <Description>{movie.overview}</Description>
          </InfoWrapper>
        </Container>
      </Background>
      </main>
    </>
  )
}

export default MovieDetail
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link, useParams } from "react-router-dom"

const BackLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-bottom: 16px;
  align-items: right;


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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;

`

const Poster = styled.img`
  width: 200px;
  border: 5px solid var(--color-border);
  max-width: 300px;
  box-shadow: 4px 6px 10px rgba(0,0,0,0.8);

`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  }
`

const HeadText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 16px;

  
`
const Overview = styled.p`
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
          <Overview>{movie.overview}</Overview>
          </InfoWrapper>
      </Container>
    </Background>
    </>
  )
}

export default MovieDetail
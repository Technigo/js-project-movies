import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2rem;
  text-align: center;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`

const Backdrop = styled.img`
  width: 100%;
  max-width: 900px;
  border-radius: 8px;
  margin: 2rem 0;

  @media (max-width: 767px) {
    margin: 1rem 0;
  }
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`

const Overview = styled.p`
  max-width: 700px;
  margin: 0 auto 1rem;
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 767px) {
    font-size: 0.95rem;
  }
`

const Info = styled.p`
  color: #666;
  font-style: italic;
  font-size: 0.9rem;
`

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: white;
  background-color: #333;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #555;
  }
`

const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0;
  gap: 0.5rem;
`

const GenreTag = styled.span`
  background: #ff4575;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.85rem;
  font-weight: 500;
`

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Movie not found')
        }
        return res.json()
      })
      .then((data) => {
        setMovieDetails(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
        setMovieDetails(null)
      })
  }, [movieId])

  if (loading) {
    return <Wrapper><p>Loading...</p></Wrapper>
  }

  if (!movieDetails) {
    return (
      <Wrapper>
        <p>Movie not found.</p>
        <BackLink to="/">← Back to movies</BackLink>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Title>{movieDetails.title}</Title>
      <Backdrop
        src={`https://image.tmdb.org/t/p/w780${movieDetails.backdrop_path}`}
        alt={`Backdrop from ${movieDetails.title}`}
      />
      <Overview>{movieDetails.overview}</Overview>
      <Info>Released: {movieDetails.release_date}</Info>

      <GenresWrapper>
        {movieDetails.genres && movieDetails.genres.map((genre) => (
          <GenreTag key={genre.id}>{genre.name}</GenreTag>
        ))}
      </GenresWrapper>

      <BackLink to="/">← Back to movies</BackLink>
    </Wrapper>
  )
}

export default MovieDetails

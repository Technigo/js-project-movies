import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import LoadingSpinner from '../components/Spinner'

const Wrapper = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #121212;
  color: #ffffff;
  min-height: 100vh;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`

const Backdrop = styled.img`
  width: 100%;
  max-width: 900px;
  border-radius: 8px;
  margin: 2rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);

  @media (max-width: 767px) {
    margin: 1rem 0;
  }
`

const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #ff4575;

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`

const Overview = styled.p`
  max-width: 700px;
  margin: 0 auto 1.5rem;
  line-height: 1.6;
  font-size: 1.05rem;
  color: #dddddd;

  @media (max-width: 767px) {
    font-size: 0.95rem;
  }
`

const Info = styled.p`
  color: #bbbbbb;
  font-style: italic;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
`

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: white;
  background-color: #ff4575;
  padding: 0.6rem 1.2rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;

  &:hover {
    background-color: #ff79a3;
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
  background: #1f1f1f;
  border: 1px solid #ff4575;
  color: #ffffff;
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
    if (!movieId) return

    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        if (!res.ok) throw new Error('Movie not found')
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
    return (
      <Wrapper>
        <LoadingSpinner />
        <p>Loading movie details…</p>
      </Wrapper>
    )
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
        loading="lazy"
      />
      <Overview>{movieDetails.overview}</Overview>
      <Info>Released: {movieDetails.release_date}</Info>

      <GenresWrapper>
        {movieDetails.genres?.map((genre) => (
          <GenreTag key={genre.id}>{genre.name}</GenreTag>
        ))}
      </GenresWrapper>

      <BackLink to="/">← Back to movies</BackLink>
    </Wrapper>
  )
}

export default MovieDetails

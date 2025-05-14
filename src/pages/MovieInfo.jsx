import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../api/api'
import { useLoader } from '../hooks/useLoader'
import { Loader } from '../components/Loader'
import styled from 'styled-components'
import { device } from '../styles/media.js'

export const StyledMovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  .movieDetails {
    display: flex;
    flex-direction: column;
    padding: 0rem 2rem;
  }

  .overview {
    font-size: 1.2rem;
    margin: 1rem 0;
    width: 100%;
  }

  img {
    max-width: 300px;
    width: auto;
    height: auto;
    object-fit: contain;
    flex-shrink: 0; /* Prevents the image from shrinking */
  }

  p {
    margin: 0.3rem 0;
    font-size: 1.2rem;
  }

  ${device.tablet} {
    flex-direction: row;
    padding: 3rem;
    margin: 10rem 2rem;
    margin: 10rem 2rem;

    .overview {
      font-size: 1.2rem;
      margin: 1rem 0;
      width: 60%;
    }
  }
`

export const MovieInfo = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading, withLoading] = useLoader(true)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Replace the direct API call with withLoading
        const data = await withLoading(() => api.fetchMovieById(id))
        setMovie(data)
      } catch (error) {
        console.error('Error fetching movie data:', error)
        setError('Failed to load movie details.')
      }
    }

    fetchMovieDetails()
  }, [id])

  if (isLoading) return <Loader />
  if (error) return <p>{error}</p>
  if (!movie) return <p>No movie found.</p>

  return (
    <StyledMovieInfo>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <div className='movieDetails'>
        <h1>{movie.title}</h1>
        <p className='overview'>{movie.overview}</p>
        <p>Original title: {movie.original_title}</p>
        <p>Genres: {movie.genres.map((genre) => genre.name).join(', ')}</p>
        <p>Language: {movie.original_language.toUpperCase()}</p>
        <p>Release date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average} / 10</p>
        <p>Runtime: {movie.runtime} min</p>
      </div>
    </StyledMovieInfo>
  )
}

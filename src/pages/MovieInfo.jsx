import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../api/api'
import { useLoader } from '../hooks/useLoader'
import { Loader } from '../components/Loader'

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
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Original title: {movie.original_title}</p>
      <p>Language: {movie.original_language.toUpperCase()}</p>
      <p>Release date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average} / 10</p>
      <p>Runtime: {movie.runtime} min</p>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const { id } = useParams()
  
  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Movie details:", data)
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
    return <p>Movie not found</p>
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Rating: {movie.vote_average}</p>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Runtime: {movie.runtime} minutes</p>
      <p>Genres: {movie.genres?.map(genre => genre.name).join(', ')}</p>
      
      {movie.poster_path && (
        <div>
          <p>Poster URL: https://image.tmdb.org/t/p/w500{movie.poster_path}</p>
        </div>
      )}
      
      {movie.backdrop_path && (
        <div>
          <p>Backdrop URL: https://image.tmdb.org/t/p/original{movie.backdrop_path}</p>
        </div>
      )}
    </div>
  )
}

export default MovieDetail
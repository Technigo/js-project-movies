import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"


const MovieDetails = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=YOUR_API_KEY
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error('Error fetching Movie details...', error));
  }
    , [])

  return (
    <div>
      <Link to="/">Back to Movies</Link>
      <h2>{movieDetails.title}</h2>

    </div>
  )
}

export default MovieDetails
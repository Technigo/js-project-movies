import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"


const MovieDetails = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState({})



  const apiKey = import.meta.env.VITE_TMDB_API_KEY;


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
      <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
      <h2>{movieDetails.title}</h2>
      <p>Rating: {movieDetails.vote_average}</p>
      <p>{movieDetails.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt={movieDetails.title} />


    </div>
  )
}

export default MovieDetails
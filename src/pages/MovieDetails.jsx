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
    <section className="movie-details"
      style={{
        backgroundImage:
          window.innerWidth >= 600 && movieDetails.backdrop_path
            ? `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path
            })`
            : "none", backgroundRepeat: "no-repeat"

      }}>
      <Link to="/" className="close-link" aria-label="Back to Movies"> &times;</Link>

      <div className="movie-details-content">
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
        <div className="movie-details-info">
          <div className="movie-details-text">
            <h2>{movieDetails.title}</h2>
            <p>Rating: {movieDetails.vote_average}</p>
          </div>
          <p>{movieDetails.overview}</p>
        </div>
      </div>


    </section >
  )
}

export default MovieDetails
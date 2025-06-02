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
    <section
      className="movie-details"
      style={{
        backgroundImage: movieDetails.backdrop_path
          ? `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`
          : "none",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Link to="/" className="close-link" aria-label="Back to Movies">&times;</Link>
      <div className="movie-details-content">
        <img
          className="movie-details-poster"
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title ? `Poster for ${movieDetails.title}` : "Movie poster"}
        />
        <div className="movie-details-info">
          <div className="movie-title-vote">
            <span className="movie-details-rating">
              <span role="img" aria-label="star">⭐</span>
              {movieDetails.vote_average ? Math.round(movieDetails.vote_average * 10) / 10 : "N/A"}
            </span>
            <h2>{movieDetails.title}</h2>
          </div>
          <p className="movie-details-overview">{movieDetails.overview}</p>
        </div>
      </div>
    </section>
  )
}

export default MovieDetails
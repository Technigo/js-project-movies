import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w342';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const PopularList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <section className="movie-list">
      {movies.map((movie) => (

        <Link className="movie-card" key={movie.id} to={`/movies/${movie.id}`}>
          <div className="card-content">

            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        </Link>

      ))}
    </section>
  )
}
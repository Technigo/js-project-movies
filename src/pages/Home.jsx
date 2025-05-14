import { useEffect, useState } from 'react'
import { api } from '../api/api'
import { Card } from '../components/Card.jsx'
import { Link } from 'react-router-dom'

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .fetchHorrorMovies()
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        console.error(err);
        setError("Something went wrong when fetching movies.");
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <h1>Popular Horror Movies 👻</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Card>
              <h2>{movie.title}</h2>
              <p>Releasedate: {movie.release_date}</p>
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={`Poster for ${movie.title}`}
              />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

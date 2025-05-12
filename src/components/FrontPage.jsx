import { movieList } from '../hooks/fetch.js';
import { Link } from 'react-router-dom';

export const FrontPage = () => {
  const { movies, loading, error } = movieList();

  return (
    <div>
      <h1>Movies</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

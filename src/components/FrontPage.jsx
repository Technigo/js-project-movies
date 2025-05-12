import { movieList } from '../hooks/fetch.js';

export const FrontPage = () => {
  const { movies, loading, error } = movieList();

  return (
    <div>
      <h1>Movies</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
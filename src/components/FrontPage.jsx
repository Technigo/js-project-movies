import styled from "styled-components";
import { movieList } from '../hooks/fetch.js';
import { Link } from 'react-router-dom';



const MovieBackground = styled.div`
  background-image: url(https://image.tmdb.org/t/p/w1280${props => props.backdrop});
  border: 2px solid black;
  height: 100%;
  width: auto;
`;

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
            <div>
            <Link to={`/movies/${movie.id}`}>
            <MovieBackground backdrop={movie.backdrop_path}>
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.release_date}</p>
              </MovieBackground>
            </Link>
            
            
            
            
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

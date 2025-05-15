import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoviePoster } from "../components/MoviePoster";

export const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const MovieList = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(MovieList);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [MovieList]);

  return (
    <>
      <PosterSection>
        {movies.map((movie) => {
          const colSpan = randomBetween(1, 2);
          const rowSpan = randomBetween(1, 2);
          return (
            <MoviePoster key={movie.id} colSpan={colSpan} rowSpan={rowSpan}>
              <StyledLink to={`/movie/${movie.id}`}>{movie.title}</StyledLink>
              <p>Release date: {movie.release_date}</p>
            </MoviePoster>
          );
        })}
      </PosterSection>
    </>
  );
};

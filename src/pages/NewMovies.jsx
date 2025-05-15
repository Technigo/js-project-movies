import { useEffect, useState } from "react";
import { PosterSection, MoviePoster, StyledLink } from "./PopularMovies";


function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const NewMovies = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const today = new Date().toISOString().split("T")[0];

  const MovieList = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&region=US&sort_by=popularity.desc&primary_release_date.gte=2025-05-01&primary_release_date.lte=${today}`;

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
    <PosterSection>
      {movies.map((movie) => {
        const colSpan = randomBetween(1, 2);
        const rowSpan = randomBetween(1, 2);
        const bgImage = movie.backdrop_path
          ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
          : null;
        return (
          <MoviePoster
            key={movie.id}
            colSpan={colSpan}
            rowSpan={rowSpan}
            bgImage={bgImage}
          >
            <StyledLink to={`/movie/${movie.id}`}>{movie.title}</StyledLink>

          </MoviePoster>
        );
      })}
    </PosterSection>
  );
};

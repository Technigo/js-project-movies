import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PosterSection = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 150px;
  gap: 5px;
  gap: 5px;
  height: 100vh;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-auto-rows: 200px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 250px;
  }
`;
export const MoviePoster = styled.article`
  outline: 6px solid white;
  display: flex;
  flex-direction: column;
  grid-column: span ${props => props.colSpan};
  grid-row: span ${props => props.rowSpan};
  background-image: ${props => props.bgImage ? `url(${props.bgImage})` : 'none'};
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 150px;

  &:hover {
 
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  font-family: 'Notable', serif;
  letter-spacing: 2px;
  opacity: 0.6;
  align-items: center;
  padding: 10px;
  height: 100%;
  color: #FFF;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 6vw;
  word-break: break-word; 
  white-space: normal;    
  text-align: center;
  transition: opacity 0.3s, text-shadow 0.3s;

  &:hover {
    opacity: 1;
    text-shadow: 0 2px 12px rgba(0,0,0,0.8), 0 0 2px #000;
  }

  @media (min-width: 600px) {
    font-size: 3vw;
  }

  @media (min-width: 1024px) {
    font-size: 2vw;
  }
`;

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
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

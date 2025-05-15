import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PosterSection = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 150px;
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

const MoviePoster = styled.article`
  outline: 6px solid white;
  padding: 10px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  grid-column: span ${props => props.colSpan};
  grid-row: span ${props => props.rowSpan};
  background-image: ${props => props.bgImage ? `url(${props.bgImage})` : 'none'};
  background-size: cover;
  background-position: center;
  position: relative;
  color: #fff;
  min-height: 150px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  
  width: 100%;
  height: 100%;
  font-weight: bold;
  color: #FFF;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 6vw;
  border: 1px solid red;
  word-break: break-word; 
  white-space: normal;    
 

  &:hover {
    text-decoration: underline;
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

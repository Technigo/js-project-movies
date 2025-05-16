import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";


export const PosterSection = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 150px;
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

  display: flex;
  flex-direction: column;
  grid-column: span ${(props) => props.colSpan};
  grid-row: span ${(props) => props.rowSpan};
  background-image: ${(props) =>
    props.bgImage ? `url(${props.bgImage})` : "none"};
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  position: relative;
  min-height: 120px;

  &:hover {
   opacity: 1;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  font-family: 'Agdasima', sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  align-items: center;
  padding: 10px;
  height: 100%;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 8vw;
  word-break: break-word; 
  white-space: normal;    
  text-align: center;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  
  &:hover {
    opacity: 1;
  
  }

  @media (min-width: 600px) {
    font-size: 5vw;
  }

  @media (min-width: 1024px) {
    font-size: 3vw;
  }
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Animation = styled.div`
  font-size: 45px;
  animation: ${Rotate} 1.5s linear infinite;
`;

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
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
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [MovieList]);

  if (loading) return (
    <Centered>
      <Animation>🍿</Animation>
    </Centered>
  );
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

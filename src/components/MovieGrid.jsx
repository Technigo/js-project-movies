import styled from "styled-components";
import { MovieCard } from "./MovieCard.jsx";

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100vw;
  max-width: none;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const MovieGrid = ({ movies }) => (
  <Grid role='list'>
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </Grid>
);

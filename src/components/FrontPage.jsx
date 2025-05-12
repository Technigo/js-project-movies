import styled from "styled-components";
import { movieList } from '../hooks/fetch.js';
import { Link } from 'react-router-dom';

const Grid = styled.ul`
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

const MovieItem = styled.li`
  position: relative;
  aspect-ratio: 2/3;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
  background: #222;
`;

const MovieLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
`;

const MovieBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://image.tmdb.org/t/p/w780${props => props.backdrop || ''});
  background-size: cover;
  background-position: center;
  transition: filter 0.3s;
  filter: brightness(0.85);
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(0deg, rgba(40,40,40,0.85) 80%, rgba(40,40,40,0.0) 100%);
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  color: #fff;
  transition: opacity 0.3s;
  pointer-events: none;
  padding: 1rem;
`;

const MovieTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.2rem 0;
  text-align: left;
`;

const ReleaseDate = styled.p`
  font-size: 0.95rem;
  margin: 0;
  text-align: left;
`;

// Show overlay on hover/focus
const MovieItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &:hover ${Overlay},
  &:focus-within ${Overlay} {
    opacity: 1;
    pointer-events: auto;
  }
  &:hover ${MovieBackground},
  &:focus-within ${MovieBackground} {
    filter: brightness(0.5);
  }
`;

export const FrontPage = () => {
  const { movies, loading, error } = movieList();

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <Grid role="list">
        {movies.map(movie => (
          <MovieItem key={movie.id} role="listitem">
            <MovieItemWrapper>
              <MovieLink to={`/movies/${movie.id}`} aria-label={`View details for ${movie.title}`} tabIndex={0}>
                <MovieBackground backdrop={movie.poster_path} aria-hidden="true" />
                <Overlay aria-hidden="false">
                  <MovieTitle>{movie.title}</MovieTitle>
                  <ReleaseDate>Release Date: {movie.release_date}</ReleaseDate>
                </Overlay>
              </MovieLink>
            </MovieItemWrapper>
          </MovieItem>
        ))}
      </Grid>
    </>
  );
};

import React from "react";
import styled from "styled-components";
import { MovieList } from "../hooks/fetch.js";
import { Link, useLocation } from "react-router-dom";
import { NoResults } from "./NoResults.jsx";
import { useMovieSearch } from "../hooks/search.js";
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

const MoviePosterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.85) 80%,
    rgba(0, 0, 0, 0) 100%
  );
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
  &:hover ${Overlay}, &:focus-within ${Overlay} {
    opacity: 1;
    pointer-events: auto;
  }
  &:hover ${MoviePosterImg}, &:focus-within ${MoviePosterImg} {
    filter: brightness(0.5);
  }
`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const FrontPage = () => {
  const query = useQuery().get("search");
  const { movies, loading, error } = MovieList();
  const {
    results,
    loading: searchLoading,
    error: searchError,
    searchMovies,
  } = useMovieSearch();

  React.useEffect(() => {
    if (query) {
      searchMovies(query);
    }
    // eslint-disable-next-line
  }, [query]);

  const displayMovies = query ? results : movies;
  const isLoading = query ? searchLoading : loading;
  const isError = query ? searchError : error;
  const showNoResults =
    query && !isLoading && !isError && displayMovies.length === 0;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}
      {showNoResults && <NoResults />}
      <Grid role='list'>
        {displayMovies.map((movie) => (
          <MovieItem key={movie.id} role='listitem'>
            <MovieItemWrapper>
              <MovieLink
                to={`/movies/${movie.id}`}
                aria-label={`View details for ${movie.title}`}
                tabIndex={0}
              >
                <MoviePosterImg
                  src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                  alt={movie.title ? `${movie.title} poster` : "Movie poster"}
                  loading='lazy'
                />
                <Overlay aria-hidden='false'>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <ReleaseDate>Released: {movie.release_date}</ReleaseDate>
                </Overlay>
              </MovieLink>
            </MovieItemWrapper>
          </MovieItem>
        ))}
      </Grid>
    </>
  );
};

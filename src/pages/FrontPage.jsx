import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar.jsx";
import { NoResults } from "../components/NoResults.jsx";
import { useMovieList } from "../hooks/useMovieList.js";
import { useMovieSearch } from "../hooks/useMovieSearch.js";
import { useQueryParam } from "../hooks/useQueryParam.js";
import { MovieGrid } from "../components/MovieGrid.jsx";

export const FrontPage = () => {
  const query = useQueryParam("search");
  const { movies, loading, error } = useMovieList();
  const {
    results,
    loading: searchLoading,
    error: searchError,
    searchMovies,
  } = useMovieSearch();

  useEffect(() => {
    if (query) {
      searchMovies(query);
    }
  }, [query]);

  const displayMovies = query ? results : movies;
  const isLoading = query ? searchLoading : loading;
  const isError = query ? searchError : error;
  const showNoResults =
    query && !isLoading && !isError && displayMovies.length === 0;

  return (
    <>
      <Navbar />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}
      {showNoResults && <NoResults />}
      <MovieGrid movies={displayMovies} />
    </>
  );
};

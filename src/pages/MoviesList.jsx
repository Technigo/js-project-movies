// rafce

import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error("No network response");
        }
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error("There was a problem fetching data", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movieTitle={movie.title} />
      ))}
    </>
  );
};

export default MoviesList;

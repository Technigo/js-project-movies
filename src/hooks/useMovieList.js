import { useEffect, useState } from "react";

const apikey = import.meta.env.VITE_MOVIE_API_KEY;

// Hook for cathing a list of movies
export const useMovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
        );
        if (!response.ok) throw new Error("Failed to fetch movie list");
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (apikey) {
      fetchMovies();
    } else {
      setError("API key missing");
    }
  }, []);
  return { movies, loading, error };
};

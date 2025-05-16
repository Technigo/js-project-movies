import { useEffect, useState } from "react";

const apikey = import.meta.env.VITE_MOVIE_API_KEY;

export const useMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&language=en-US`
        );
        if (!response.ok) throw new Error("Movie not found");
        const data = await response.json();
        setMovieDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (apikey && movieId) {
      fetchMovieDetails();
    } else if (!apikey) {
      setError("API key missing");
    }
  }, [movieId]);

  return { movieDetails, loading, error };
};

import { useEffect, useState } from "react";

let movieId = 1241436;
const apikey = import.meta.env.VITE_MOVIE_API_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
const API_URL_DETAILS = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&language=en-US`;

export const movieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};

// export const movieDetails = (movieId) => {
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {

//     const fetchMovieDetails = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(API_URL_DETAILS);
//         if (!response.ok) throw new Error('Failed to fetch');
//         const data = await response.json();
//         setMovieDetails(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId]);

//   return { movieDetails, loading, error };
// };

export const movieDetails = (movieId) => {
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
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setMovieDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  return { movieDetails, loading, error };
};

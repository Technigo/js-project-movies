import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "e03ef304f04e9ccd4e65d3a94a406511";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="spinner">Loading movies...</div>;
  }

  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
        </Link>
      ))}
    </section>
  );
}

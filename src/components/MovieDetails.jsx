import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "e03ef304f04e9ccd4e65d3a94a406511";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Movie not found");
        }
        return res.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="spinner">Loading...</div>;
  if (error) return <div className="error">Movie not found.</div>;

  return (
    <article className="movie-details">
      <Link to="/">← Back</Link>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
    </article>
  );
}

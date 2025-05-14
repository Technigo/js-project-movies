import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/api";

export const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await api.fetchMovieById(id);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    getMovie();
  }, [id]);

  if (!movie) return <p>Loading movie info...</p>; //spinner here to show loading instead of text?

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Original title: {movie.original_title}</p>
      <p>Language: {movie.original_language.toUpperCase()}</p>
      <p>Release date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average} / 10</p>
      <p>Runtime: {movie.runtime} min</p>
    </div>
  );
};

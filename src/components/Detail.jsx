import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w780';

export const Detail = () => {
  const { id } = useParams(); // ✅ grab the id
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    fetch(URL)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <section className="movie-detail">
      <img
        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt={movie.title}
        className="backdrop"
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
    </section>
  )
}

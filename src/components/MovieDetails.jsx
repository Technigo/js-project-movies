import { movieDetails } from '../hooks/fetch.js';

export const MovieDetails = ({ movieId }) => {
  const { movieDetails: details, loading, error } = movieDetails(movieId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!details) return null;

  return (
    <div>
      <h2>{details.title}</h2>
      <p>{details.overview}</p>
      <p>Release Date: {details.release_date}</p>
      <p>Rating: {details.vote_average}/10</p>
    </div>
  );
};
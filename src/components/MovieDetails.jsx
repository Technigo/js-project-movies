import { movieDetails } from '../hooks/fetch.js';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();
  const { movieDetails: details, loading, error } = movieDetails(id);

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



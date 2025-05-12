import styled from "styled-components";
import { movieDetails } from '../hooks/fetch.js';
import { useParams } from 'react-router-dom';


const MovieBackground = styled.div`
  background-image: url(https://image.tmdb.org/t/p/original${props => props.poster});
  border: 2px solid black;
  height: 100vh;
  width: auto;
`;

const MoviePoster = styled.div`
  background-image: url(https://image.tmdb.org/t/p/original${props => props.poster});
  cover: fit;
  width: 200px;
  height: 200px;
  border: 5px solid green;
  position: bottom;
  `

export const MovieDetails = () => {
  const { id } = useParams();
  const { movieDetails: details, loading, error } = movieDetails(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!details) return null;

  return (
    <div>
      <MovieBackground poster={details.poster_path}>
      <h2>{details.title}</h2>
      <p>{details.overview}</p>
      <p>Release Date: {details.release_date}</p>
      <p>Rating: {details.vote_average}/10</p>
      <MoviePoster poster={details.poster_path}> bödfajbaködjbfkd</MoviePoster>
      </MovieBackground>
    </div>
  );
};



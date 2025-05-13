import styled from "styled-components";
import { movieDetails } from "../hooks/fetch.js";
import { useParams } from "react-router-dom";

const MovieBackground = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%),
    url(https://image.tmdb.org/t/p/original${(props) => props.poster});
  min-height: 100vh;
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;
`;

const MovieInfo = styled.div``;

const MoviePoster = styled.img`
  width: 200px;
  height: 295px;
  border: 5px solid white;
  object-fit: cover;
`;

export const MovieDetails = () => {
  const { id } = useParams();
  const { movieDetails: details, loading, error } = movieDetails(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!details) return null;

  return (
    <div>
      <MovieBackground poster={details.poster_path}>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt='Movie Poster'
        />
        <h2>{details.title}</h2>
        <p>{details.overview}</p>
        <p>Rating: {details.vote_average}/10</p>
      </MovieBackground>
    </div>
  );
};

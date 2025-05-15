import styled from "styled-components";
import { useMovieDetails } from "../hooks/useMovieDetails.js";
import { useParams } from "react-router-dom";
import { BackLink } from "../components/BackLink.jsx";
import { MoviePoster } from "../components/MoviePoster.jsx";
import { MovieInfo } from "../components/MovieInfo.jsx";
import { ErrorComponent } from "../components/ErrorComponent.jsx";

const PosterBackground = styled.div`
  ${({ poster }) =>
    poster
      ? `
    background-image: linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%),
    url(https://image.tmdb.org/t/p/original${poster});
    background-size: cover;
    `
      : `
    background-color: black;
    `}
  min-height: 100vh;
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
`;

export const MoviePage = () => {
  const { id } = useParams();
  const { movieDetails: details, loading, error } = useMovieDetails(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorComponent message={error} />;
  if (!details) return null;

  return (
    <>
      <PosterBackground poster={details.backdrop_path}>
        <BackLink />
        <MovieInfo details={details} />
      </PosterBackground>
    </>
  );
};

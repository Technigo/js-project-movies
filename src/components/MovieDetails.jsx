import styled from "styled-components";
import { movieDetails } from "../hooks/fetch.js";
import { useParams } from "react-router-dom";
import { BackLink } from "./BackLink";
import { MoviePoster } from "./MoviePoster";
import { Rating } from "./Rating";
import { ComingSoonTag } from "./ComingSoonTag";
import { ErrorComponent } from "./ErrorComponent";

const PosterBackground = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%),
    url(https://image.tmdb.org/t/p/original${(props) => props.poster});
  min-height: 100vh;
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
`;

const MovieWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  @media (min-width: 577px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const MovieDetailsWrapper = styled.div`
  max-width: 400px;
  @media (min-width: 577px) {
    margin: 0 0 0 20px;
  }
`;

const StyledH1 = styled.h1`
  font-size: 24px;
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const Title = styled.span`
  margin: 0 10px 0 0;
  text-shadow: 1px 1px #4d4d4d;
`;

export const MovieDetails = () => {
  const { id } = useParams();
  const { movieDetails: details, loading, error } = movieDetails(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorComponent message={error} />;
  if (!details) return null;

  return (
    <div>
      <PosterBackground poster={details.backdrop_path}>
        <BackLink />
        <MovieWrapper>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={`Movie Poster of ${details.title}`}
          />
          <MovieDetailsWrapper>
            <StyledH1>
              <Title>{details.title}</Title>
              <Rating
                value={details.vote_average}
                releaseDate={details.release_date}
              />
            </StyledH1>
            <ComingSoonTag releaseDate={details.release_date} />
            <p>{details.overview}</p>
          </MovieDetailsWrapper>
        </MovieWrapper>
      </PosterBackground>
    </div>
  );
};

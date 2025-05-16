import styled from "styled-components";
import { MoviePoster } from "./MoviePoster.jsx";
import { Rating } from "./Rating.jsx";
import { ComingSoonTag } from "./ComingSoonTag.jsx";

const MovieWrapper = styled.div`
  padding: 3.125rem;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  @media (min-width: 577px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const MovieDetailsWrapper = styled.div`
  max-width: 25rem;

  @media (min-width: 577px) {
    margin: 0 0 0 1.25rem;
  }
`;

const StyledH1 = styled.h1`
  font-size: 1.5rem;
  margin: 1.25rem 0 0 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Title = styled.span`
  margin: 0 0.625rem 0 0;
  text-shadow: 0.0625rem 0.0625rem #4d4d4d;
`;

export const MovieInfo = ({ details }) => {
  return (
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
  );
};

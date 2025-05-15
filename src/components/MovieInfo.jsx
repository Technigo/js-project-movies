import styled from "styled-components";
import { MoviePoster } from "./MoviePoster.jsx";
import { Rating } from "./Rating.jsx";
import { ComingSoonTag } from "./ComingSoonTag.jsx";

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

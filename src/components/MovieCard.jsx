import styled from "styled-components";
import { Link } from "react-router-dom";
import { ComingSoonTag } from "./ComingSoonTag.jsx";

const MovieItem = styled.li`
  position: relative;
  aspect-ratio: 2 / 3;
  border-radius: 0;
  overflow: hidden;
  background: #222;
`;

const MoviePosterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: filter 0.3s;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.85) 80%,
    rgba(0, 0, 0, 0) 100%
  );
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  color: #fff;
  transition: opacity 0.3s;
  pointer-events: none;
  padding: 1rem;
`;

const MovieItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &:hover ${Overlay}, &:focus-within ${Overlay} {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover ${MoviePosterImg}, &:focus-within ${MoviePosterImg} {
    filter: brightness(0.5);
  }
`;

const MovieLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
`;

const MovieTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem 0 0.2rem 0;
  text-align: left;
`;

const ReleaseDate = styled.p`
  font-size: 0.95rem;
  margin: 0 0 0.5rem 0;
  text-align: left;
`;

export const MovieCard = ({ movie }) => {
  return (
    <MovieItem role='listitem'>
      <MovieItemWrapper>
        <MovieLink
          to={`/movies/${movie.id}`}
          aria-label={`View details for ${movie.title}`}
          tabIndex={0}
        >
          <MoviePosterImg
            src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
            alt={movie.title ? `${movie.title} poster` : "Movie poster"}
            loading='lazy'
          />
          <Overlay aria-hidden='false'>
            <ComingSoonTag releaseDate={movie.release_date} short />
            <MovieTitle>{movie.title}</MovieTitle>
            <ReleaseDate>Released: {movie.release_date}</ReleaseDate>
          </Overlay>
        </MovieLink>
      </MovieItemWrapper>
    </MovieItem>
  );
};

import styled from "styled-components";
import { movieDetails } from "../hooks/fetch.js";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoCaretBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

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

const BackLink = styled(Link)`
  position: absolute;
  top: 16px;
  left: 50px;
  text-decoration: none;
  color: white;
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  filter: drop-shadow(2px 3px 4px rgb(0 0 0 / 0.5));
`;

const MovieInfoWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media (min-width: 577px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const MovieDetailsWrapper = styled.div`
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
const Rating = styled.span`
  background-color: white;
  color: black;
  padding: 0 5px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const MoviePoster = styled.img`
  width: 190px;
  height: 285px;
  border: 5px solid white;
  object-fit: cover;

  @media (min-width: 577px) {
    width: 240px;
    height: 360px;
  }

  @media (min-width: 770px) {
    width: 352px;
    height: 523px;
  }
`;

export const MovieDetails = () => {
  const { id } = useParams();
  const { movieDetails: details, loading, error } = movieDetails(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!details) return null;

  return (
    <div>
      <PosterBackground poster={details.backdrop_path}>
        <BackLink to='/'>
          <IoCaretBackCircle
            style={{
              color: "white",
              marginRight: "4px",
              height: "30px",
              width: "30px",
            }}
          />
          Movies
        </BackLink>
        <MovieInfoWrapper>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt='Movie Poster'
          />
          <MovieDetailsWrapper>
            <StyledH1>
              <Title>{details.title}</Title>
              <Rating>
                <FaStar
                  style={{
                    color: "gold",
                    marginRight: "4px",
                    height: "18px",
                    width: "18px",
                  }}
                />
                {Number(details.vote_average).toFixed(1)}
              </Rating>
            </StyledH1>
            <p>{details.overview}</p>
          </MovieDetailsWrapper>
        </MovieInfoWrapper>
      </PosterBackground>
    </div>
  );
};

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100dvh;
  background: ${({ backdrop }) =>
    backdrop
      ? `url(https://image.tmdb.org/t/p/w1280/${backdrop}) center/cover no-repeat`
      : "white"};
  z-index: -1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(214, 214, 214, 0.8);
  padding: 10px;
  max-width: 800px;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
  z-index: 1;
  font-family: 'Agdasima', sans-serif;
  letter-spacing: 1px;
  font-size: 18px;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 20px;
    padding: 20px;
  }
`;

const Poster = styled.img`
  display: none;
  max-width: 250px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);

   @media (min-width: 600px) {
      display: block;
  }
`;

const DetailsH3 = styled.h3`
  font-size: 16px;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Animation = styled.div`
  font-size: 45px;
  animation: ${Rotate} 1.5s linear infinite;
`;

const ErrorMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  font-size: 2rem;
  color: #000;
  font-family: 'Agdasima', sans-serif;
  text-align: center;
  gap: 1rem;
`;

export const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6e12c92fda59e113d79a5c9c5abd897b`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <Centered>
      <Animation>🍿</Animation>
    </Centered>
  );

  return (
    <>
      {movie && movie.title ? (
        <Backdrop backdrop={movie.backdrop_path}>
          <ContentWrapper>
            {movie.poster_path && (
              <Poster
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <div>
              <p>
                <h2>{movie.title}</h2>
              </p>
              <p>{movie.overview}</p>
              <p>Released: {movie.release_date}</p>
              <h3>{movie.vote_average ? movie.vote_average.toFixed(1) : ""} 🌟</h3>
              <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>

            </div>
          </ContentWrapper>
        </Backdrop>

      ) : (
        <ErrorMsg>
          <span role="img" aria-label="confused popcorn" style={{ fontSize: "4rem" }}>🍿🤔</span>
          <div>
            <strong>Oh no!</strong> <br />
            No movie found here.<br />
            <span style={{ fontSize: "1.2rem" }}>Try picking a movie from the list instead!</span>
          </div>
          <Link to="/">← Back to movies</Link>
        </ErrorMsg>
      )}
    </>
  );
};

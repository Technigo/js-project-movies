import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${({ backdrop }) =>
    backdrop
      ? `url(https://image.tmdb.org/t/p/w1280/${backdrop}) center/cover no-repeat`
      : "blue"};
  z-index: -1;
  margin-bottom: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  background-color: rgba(214, 214, 214, 0.7);
  max-width: 800px;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 16px;
`;

const Poster = styled.img`
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
`;

const DetailsH3 = styled.h3`
  font-size: 16px;
`;

export const Details = () => {
  const { id } = useParams(); // Assuming your route is /details/:id
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API endpoint
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

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>Movie Details</h2>
      {movie && movie.title ? (
        <>
          <Backdrop backdrop={movie.backdrop_path} />
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
              <h3>About:</h3> <p>{movie.overview}</p>
              <p>
                <h3>Release date:</h3> {movie.release_date}
              </p>
              {/* Add more fields as needed */}
            </div>
          </ContentWrapper>
        </>
      ) : (
        <p>Movie not found!</p>
      )}
      <Link to="/">
        <button>Back to Movies</button>
      </Link>
    </>
  );
};

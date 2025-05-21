import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Loader } from '../components/Loader';
import { ErrorMsg } from '../components/ErrorMsg';

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  background: ${({ backdrop }) =>
    backdrop
      ? `url(https://image.tmdb.org/t/p/w1280/${backdrop}) center/cover no-repeat`
      : 'white'};
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

export const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          setMovie(null);
        } else {
          setMovie(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

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
              <h3>
                {movie.vote_average ? movie.vote_average.toFixed(1) : ''} 🌟
              </h3>
              <p>{movie.genres.map((genre) => genre.name).join(', ')}</p>
            </div>
          </ContentWrapper>
        </Backdrop>
      ) : (
        <ErrorMsg />
      )}
    </>
  );
};

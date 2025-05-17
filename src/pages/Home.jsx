import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { Card } from '../components/Card.jsx';
import { device } from '../styles/media.js';
import { useLoader } from '../hooks/useLoader';
import { Loader } from '../components/Loader.jsx';

export const StyledHome = styled.section`
  width: 100%;
  margin: 0 auto;

  .movies {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  ${device.tablet} {
    padding: 1rem;

    .movies {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
`;

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const { isLoading, withLoading } = useLoader(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await withLoading(() => api.fetchHorrorMovies());
        setMovies(data?.results);
      } catch (err) {
        console.error(err);
        setError('Something went wrong when fetching movies.');
      }
    };

    fetchMovies();
  }, [withLoading]);

  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <StyledHome>
      <div className='movies'>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </StyledHome>
  );
};

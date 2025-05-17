import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { api } from "../api/api";
import { Card } from "../components/Card";
import { Loader } from "../components/Loader";
import { useLoader } from "../hooks/useLoader";

const StyledDecadeView = styled.div`
  padding: 1rem;

  h1 {
    margin-bottom: 2rem;
    color: white;
    text-align: center;
  }

  .movies-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0; /* Cards har sin egen spacing */
  }
`;

export const DecadeView = () => {
  const { decade } = useParams();
  const [movies, setMovies] = useState([]);
  const { isLoading, withLoading } = useLoader(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Make sure decade is a number
        const decadeYear = parseInt(decade, 10);

        // Use your existing API method
        const data = await withLoading(() =>
          api.fetchHorrorMoviesByDecade(decadeYear)
        );

        // Filter to just horror movies (if needed)
        const horrorMovies = data.results.filter((movie) =>
          movie.genre_ids?.includes(27)
        );

        setMovies(horrorMovies);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
        setError("Could not load movies. Please try again.");
      }
    };

    fetchMovies();
  }, [decade, withLoading]);

if (isLoading) return <Loader />
  if (error) return <p>{error}</p>;

  return (
    <StyledDecadeView>
      <h1>{decade}'s Horror Movies</h1>
      {movies.length === 0 ? (
        <p>No horror movies found for this decade.</p>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </StyledDecadeView>
  );
};

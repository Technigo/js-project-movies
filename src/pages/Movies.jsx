import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import styled from "styled-components";

const MoviesLayout = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiKey]);

  return (
    <main>
      <h1 hidden> Movies to watch from 2024?</h1>
      <MoviesLayout>
        {movies.length ? (
          movies.map((movie) => {
            return (
              <Card
                id={movie.id}
                key={movie.id}
                movie={movie.title}
                overview={movie.overview}
                release_date={movie.release_date}
                poster_path={`/images/t/p/w500${movie.poster_path}`}
              />
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </MoviesLayout>
    </main>
  );
};

export default Movies;

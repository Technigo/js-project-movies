import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import styled from "styled-components";
import LoadingIcon from "../components/LoadingIcon.jsx";

const MoviesLayout = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMoviesForDecade = async () => {
      const decadeStart = 1990; // Change this to the start year of the decade you want
      const allMovies = [];

      for (let year = decadeStart; year < decadeStart + 10; year++) {
        for (let page = 1; page <= 2; page++) {
          // Fetch 2 pages per year
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=${year}&page=${page}&sort_by=vote_average.desc,vote_count.desc&without_genres=10770&with_original_language=en`
          );
          const data = await response.json();
          allMovies.push(...data.results);
        }
      }

      // Sort all movies by vote_average and vote_count, then take the top 25
      const topMovies = allMovies
        .sort(
          (a, b) =>
            b.vote_average - a.vote_average || b.vote_count - a.vote_count
        )
        .slice(0, 25);

      setMovies(topMovies);
    };

    fetchMoviesForDecade().catch((error) =>
      console.error("Error fetching data:", error)
    );
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
          <LoadingIcon />
        )}
      </MoviesLayout>
    </main>
  );
};

export default Movies;

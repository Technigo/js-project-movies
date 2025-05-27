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
    if (!apiKey) {
      console.error(
        "API key is missing. Please set VITE_TMDB_API_KEY in your environment."
      );
      return;
    }

    const fetchMoviesForDecade = async () => {
      const decadeStart = 1990;
      const fetchPromises = [];

      for (let year = decadeStart; year < decadeStart + 10; year++) {
        for (let page = 1; page <= 3; page++) {
          const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=${year}&page=${page}&sort_by=vote_average.desc,vote_count.desc&without_genres=10770&with_original_language=en`;
          fetchPromises.push(
            fetch(url)
              .then((res) => {
                if (!res.ok) {
                  throw new Error(`Oops! ${res.status} ${res.statusText}`);
                }
                return res.json();
              })
              .then((data) => data.results || [])
              .catch((err) => {
                console.error(err);
                return [];
              })
          );
        }
      }

      const allResults = await Promise.all(fetchPromises);
      const allMovies = allResults.flat();

      const topMovies = allMovies
        .sort(
          (a, b) =>
            b.vote_average - a.vote_average || b.vote_count - a.vote_count
        )
        .slice(0, 40);

      setMovies(topMovies);
    };

    fetchMoviesForDecade().catch((error) =>
      console.error("Error fetching data:", error)
    );
  }, [apiKey]);

  return (
    <main>
      <h2 hidden> Pick a movie from the 90s you may have missed.</h2>
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
                poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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

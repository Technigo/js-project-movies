import { useParams } from "react-router";
import { useEffect, useState } from "react";
import StyledLink from "../components/Linkstyles";
import styled from "styled-components";

const PageText = styled.div`
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 5px black, 0 0 10px black, 0 0 15px black;
  max-width: 40%;
`;

const Backdrop = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the container */
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [movieId, apiKey]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <h1 hidden>The movie displayed is {movieDetails.title}</h1>
      <PageText>
        <h2>{movieDetails.title}</h2>
        <h3>Language: {movieDetails.original_language}</h3>

        <h3>
          Release Date:{" "}
          {new Date(movieDetails.release_date).toLocaleDateString()}
        </h3>

        <h3>
          Rating:{" "}
          {Array(Math.round(movieDetails.vote_average / 2)) // Scale to 5 popcorns
            .fill("🍿")
            .join("")}
          {movieDetails.vote_average &&
            Array(Math.max(0, 5 - Math.round(movieDetails.vote_average / 2)))
              .fill("🍿")
              .map((_, index) => (
                <span key={index} style={{ opacity: 0.2 }}>
                  🍿
                </span>
              ))}
        </h3>
        <h3>Runtime: {movieDetails.runtime} minutes</h3>

        <p>{movieDetails.overview}</p>
        <h3>Genres:</h3>
        <ul>
          {movieDetails.genres &&
            movieDetails.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>

        <StyledLink style={{ fontSize: "1rem" }} to={"/"}>
          View All Movies
        </StyledLink>
      </PageText>
      {movieDetails.backdrop_path ? (
        <Backdrop>
          <img
            src={`https://image.tmdb.org/t/p/w780${movieDetails.backdrop_path}`}
            srcSet={`
    https://image.tmdb.org/t/p/w300${movieDetails.backdrop_path || ""} 300w,
    https://image.tmdb.org/t/p/w780${movieDetails.backdrop_path || ""} 780w,
    https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path || ""} 1280w,
    https://image.tmdb.org/t/p/original${movieDetails.backdrop_path || ""} 1920w
  `}
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 780px, 1280px, (min-width: 1281px) 1920px"
            alt={movieDetails.title || "Movie backdrop"}
          />
        </Backdrop>
      ) : (
        <p>No backdrop available</p>
      )}
    </main>
  );
};

export default MovieDetails;

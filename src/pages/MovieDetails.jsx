import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import LoadingIcon from "../components/LoadingIcon";

const PageText = styled.div`
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  bottom: 0rem;
  left: 0rem;
  color: white;
  padding: 0.75rem;
  border: 0;
  text-shadow: rgba(0, 0, 0, 0.08);
  width: 100%;
  height: fit-content;
  max-width: 32rem;
  text-align: left;

  h2 {
    font-size: calc(3vw + 1rem);
    margin: 0;
    text-transform: uppercase;
  }
  h3 {
    font-size: 1.5rem;
    margin: 0;
  }
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }
  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    margin-top: 0;
    text-align: justify;
    text-justify: distribute-all-lines;
    text-align-last: left;
  }

  @media (min-width: 480px) and (max-width: 779px) {
    width: 80%;
    padding: 1rem;
  }
  @media (min-width: 780px) and (max-width: 1024px) {
    max-width: 32rem;
    padding: 1rem;
    bottom: 1rem;
    left: 1rem;
  }
  @media (min-width: 1025px) {
    max-width: 40%;
    padding: 1rem;
    bottom: 1rem;
    left: 1rem;
  }
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
    object-fit: cover;
    object-position: center;
    filter: blur(3px) brightness(0.5);
  }
`;
const GenreList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  text-indent: 0;
  margin: 0 0 0.5rem 0;
  text-indent: 0;
  padding: 0;
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [movieDetails, setMovieDetails] = useState(null);
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
      ).then((response) => response.json()),
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
      ).then((response) => response.json()),
    ])
      .then(([movieData, videoData]) => {
        // Redirect if movie not found (status_code 34)
        if (movieData.status_code === 34) {
          navigate("/notfound", { replace: true });
          return;
        }
        setMovieDetails(movieData);

        const trailer = videoData.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailer) {
          setVideoKey(trailer.key);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        navigate("/notfound", { replace: true });
      });
  }, [movieId, apiKey, navigate]);

  if (!movieDetails) {
    return (
      <main>
        <h1 hidden>Loading movie details...</h1>
        <LoadingIcon />
      </main>
    );
  }

  return (
    <main>
      <h2 hidden>The movie displayed is {movieDetails.title}</h2>

      <PageText>
        {videoKey ? (
          <>
            <iframe
              style={{
                display: "block",
                border: "none",
                borderRadius: "0.5rem",
                zIndex: 1,
                width: "100%",
                height: "100%",
                aspectRatio: "16/9",
              }}
              loading="lazy"
              src={`https://www.youtube.com/embed/${videoKey}?modestbranding=1&rel=0&controls=0&autoplay=0&playsinline=1`}
              title="Movie Trailer"
              allow="accelerometer; encrypted-media; gyroscope; closed-captioning"
              allowFullScreen
              aria-label={`${movieDetails.title} movie trailer`}
            ></iframe>
          </>
        ) : (
          <p>No trailer available</p>
        )}
        <h2>{movieDetails.title}</h2>
        <h3>
          {" "}
          {movieDetails.runtime
            ? `${Math.floor(movieDetails.runtime / 60)}h ${
                movieDetails.runtime % 60
              }m`
            : "Runtime not available"}
        </h3>

        <h4>
          {movieDetails.original_language
            ? Intl.DisplayNames
              ? new Intl.DisplayNames([], { type: "language" }).of(
                  movieDetails.original_language
                ) || "Unknown Language"
              : movieDetails.original_language
            : "Unknown Language"}
        </h4>

        <GenreList>
          {movieDetails.genres
            ? movieDetails.genres.slice(0, 3).map((genre, index) => (
                <li key={genre.id}>
                  {" "}
                  {genre.name}
                  {index < 2 ? " | " : ""}
                </li>
              ))
            : "Genres not available"}
        </GenreList>

        <span>
          Score:{" "}
          {movieDetails.vote_average !== undefined &&
            Array(Math.round((movieDetails.vote_average ?? 0) / 2))
              .fill("🍿")
              .map((_, index) => <span key={`filled-${index}`}>🍿</span>)}
          {movieDetails.vote_average !== undefined &&
            Array(
              Math.max(0, 5 - Math.round((movieDetails.vote_average ?? 0) / 2))
            )
              .fill("🍿")
              .map((_, index) => (
                <span key={`empty-${index}`} style={{ opacity: 0.2 }}>
                  🍿
                </span>
              ))}
        </span>
        <p>{movieDetails.overview}</p>
        <p>
          Released on {new Date(movieDetails.release_date).toLocaleDateString()}
        </p>
      </PageText>

      <Backdrop>
        <img
          src={`https://image.tmdb.org/t/p/w780${movieDetails.backdrop_path}`}
          srcSet={` https://image.tmdb.org/t/p/original${
            movieDetails.backdrop_path || ""
          } 1920w`}
          sizes="(max-width: 768px) 300px, (max-width: 1200px) 780px, 1280px, (min-width: 1281px) 1920px"
          alt={movieDetails.title || "Movie backdrop"}
        />
      </Backdrop>
    </main>
  );
};

export default MovieDetails;

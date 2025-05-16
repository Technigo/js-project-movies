import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useLoader } from "../hooks/useLoader";
import styled from "styled-components";
import { device } from "../styles/media.js";
import { Loader } from "../components/Loader";

export const StyledMovieInfo = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;

  .backdropContainer {
    display: none; // Hidden on mobile
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    background-image: none;
  }

  .movieDetails {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }

  .overview {
    font-size: 1rem;
    margin: 1rem 0;
    width: 100%;
  }

  img {
    max-width: 300px;
    width: auto;
    height: auto;
    object-fit: contain;
    flex-shrink: 0; /* Prevents the image from shrinking */
  }

  p {
    margin: 0.3rem 0;
    font-size: 1rem;
  }

  ${device.mobileL} {
  }

  ${device.tablet} {
    .backdropContainer {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 400px; // Reduced height to make overlap more visible
      background-size: cover;
      background-position: center top;
      background-repeat: no-repeat;
      background-image: ${(props) =>
        props.$backdrop
          ? `url(https://image.tmdb.org/t/p/w780${props.$backdrop})`
          : "none"};
      z-index: 0;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3) 0%,
          rgba(0, 0, 0, 0.9) 90%
        );
      }
    }

    .contentContainer {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: row;
      padding: 1rem;
      margin: 300px 2rem 2rem 2rem;
      margin-top: 350px; // This pulls it up to create overlap
      background-color: rgba(20, 20, 20, 0.95);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); // Add shadow for depth
    }

    .movieDetails {
      width: 100%;
      padding: 0 0 0 2rem;
    }

    .overview {
      font-size: 1.2rem;
      margin: 1rem 0;
      width: 90%;
    }

    img {
      max-width: 400px;
      width: auto;
      height: auto;
      object-fit: contain;
      flex-shrink: 0; /* Prevents the image from shrinking */
    }
  }
  ${device.laptop} {
    .backdropContainer {
      height: 500px; // Taller backdrop on larger screens
      background-image: ${(props) =>
        props.$backdrop
          ? `url(https://image.tmdb.org/t/p/w1280${props.$backdrop})`
          : "none"};
    }

    .contentContainer {
      margin-top: 400px; // Pull content up more on larger screens for bigger overlap
      max-width: 1200px;
    }

    .movieDetails {
      width: 80%;
    }
  }
  ${device.desktop} {
    .backdropContainer {
      background-image: ${(props) =>
        props.$backdrop
          ? `url(https://image.tmdb.org/t/p/original${props.$backdrop})`
          : "none"};
    }
  }

  .movieRating span {
    color: gold;
  }
`;

export const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { isLoading, withLoading } = useLoader(true);

  useEffect(() => {
    let isMounted = true;

    const fetchMovieDetails = async () => {
      try {
        const data = await withLoading(() => api.fetchMovieById(id));
        if (isMounted) {
          setMovie(data);
          console.log("Backdrop path:", data.backdrop_path);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching movie data:", error);
          setError("Failed to load movie details.");
        }
      }
    };

    fetchMovieDetails();

    return () => {
      isMounted = false;
    };
  }, [id, withLoading]);

  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie found.</p>;

  return (
    <StyledMovieInfo $backdrop={movie.backdrop_path || ""}>
      {/* Backdrop Container */}
      <div className="backdropContainer"></div>
      <div className="contentContainer">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path || ""}`}
          alt={movie.title || "Movie Poster"}
        />
        <div className="movieDetails">
          <h1>{movie.title}</h1>
          <p className="overview">{movie.overview}</p>
          <p>Original title: {movie.original_title}</p>
          <p>
            Genres:{" "}
            {movie.genres?.map((genre) => genre.name).join(", ") || "N/A"}
          </p>
          <p>Language: {movie.original_language.toUpperCase()}</p>
          <p>Release date: {movie.release_date}</p>
          <div className="movieRating">
            <p>
              Rating: <span>★</span> {movie.vote_average.toFixed(1)}/10
            </p>
          </div>
          <p>Runtime: {movie.runtime} min</p>
        </div>
      </div>
    </StyledMovieInfo>
  );
};

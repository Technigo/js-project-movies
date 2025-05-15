import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: #e60026;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const MovieContainer = styled.div`
  width: 100%;
  max-width: 900px;
  background: #000;
  padding: 1.5rem;
  box-sizing: border-box;
  color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoviePoster = styled.img`
  width: 100%;
  max-width: 800px;
  display: block;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
`;

const StyledOverviewWrapper = styled.div`
  color: #fff;
  width: 100%;
  background-color: #1a1a1a;
  border-radius: 0.5rem;
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom: 1.5rem;
`;

// Inline MovieOverview Component
const MovieOverview = ({
  movieTitle,
  rating,
  overview,
  popularity,
  voteAverage,
}) => (
  <div>
    <h3>{movieTitle}</h3>
    <p>
      <strong>Rating:</strong> {rating}
    </p>
    <p>
      <strong>Popularity:</strong> {popularity}
    </p>
    <p>
      <strong>Vote Average:</strong> {voteAverage}
    </p>
    <p>{overview}</p>
  </div>
);

// Main Component
const MovieDetails = () => {
  const { movieid } = useParams();
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${apiKey}&language=en-US`;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Movie not found");
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieid]);

  if (loading) return <p style={{ color: "white" }}>Loading movie details…</p>;
  if (error || !movie)
    return <p style={{ color: "white" }}>Movie not found.</p>;

  return (
    <MovieContainer>
      <h1>Movie Details</h1>
      <h2>{movie.title}</h2>

      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />

      <StyledOverviewWrapper>
        <MovieOverview
          movieTitle={movie.original_title}
          rating={movie.vote_average}
          overview={movie.overview}
          popularity={movie.popularity}
        />
      </StyledOverviewWrapper>

      <StyledLink to="/">← Back to movie list</StyledLink>
    </MovieContainer>
  );
};

export default MovieDetails;

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

const DetailsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  background: #000;
  color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageBackground = styled.div`
  background: linear-gradient (rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%);
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  position: relative;
`;

const DetailsCard = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  inset: 0;
  padding: 50px;
  gap: 10px;
`;

const MoviePoster = styled.img`
  width: auto;
  border: 5px solid white;
`

// Inline MovieOverview Component
const MovieOverview = ({ movieTitle, rating, overview, popularity }) => (
  <div>
    <h3>{movieTitle}</h3>
    <p>
      <strong>Rating:</strong> {rating}
    </p>
    <p>
      <strong>Popularity:</strong> {popularity}
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
    <DetailsContainer>
      {/* <h1>Movie Details</h1>
      <h2>{movie.title}</h2> */}

      <PageBackground>
        <img
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        alt={movie.title}/>
      </PageBackground>

      <DetailsCard>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}/>
        <MovieOverview
          movieTitle={movie.original_title}
          rating={movie.vote_average}
          overview={movie.overview}
          popularity={movie.popularity}
        />
      </DetailsCard>

      <StyledLink to="/">← Back to movie list</StyledLink>
    </DetailsContainer>
  );
};

export default MovieDetails;

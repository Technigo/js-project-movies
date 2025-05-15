import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components

const DetailsContainer = styled.div`
  width: 100%;
  background: #000;
  color: #fff;
  margin: 0 auto;
  display: flex;
  /* flex-direction: column;
  justify-content: center;
  align-items: center; */
  position: relative;
  min-height: 100vh;
  z-index: 5;
  `;

  const StyledLink = styled(Link)`
    position: absolute;
    top: 20px;
    left: 50px; 
    display: block;
    color: white;
    text-decoration: none;
    font-weight: bold;
    text-shadow: 1px 1px slategray;
    z-index: 10;
    
    &:hover {
      transform: scale(1.1);
    }
  `;

const PageBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
      rgba(0, 0, 0, 0) 50%,
      rgb(0, 0, 0) 100%
    ),
    url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
`;


const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  position: relative;
  inset: 0;
  padding: 20px;
  gap: 20px;
  margin-top: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
  }
`;

const MoviePoster = styled.img`
  width: 80%; 
  max-width: 300px; 
  height: auto;
  border: 5px solid white;

  @media (min-width: 768px) {
    width: auto; 
    max-width: none;
  }
`

const MovieTitle = styled.h1`
  text-shadow: 1px 1px slategray;
`

const Popularity = styled.p`
  margin: 16px 0;
`
const TextOverview = styled.p`
  margin: 16px 0;
`

const MovieRating = styled.span`
  background: white;
  color: black;
  margin-left: 15px;
  padding: 5px 10px;
  font-size: 1.5rem;
`

// Inline MovieOverview Component
const MovieOverview = ({ movieTitle, rating, overview, popularity }) => (
  <div>
    <MovieTitle>{movieTitle}
      <MovieRating>
        ⭐️ {rating.toFixed(1)}
      </MovieRating>
    </MovieTitle>
    <Popularity>
      <strong>Popularity:</strong> {popularity.toFixed(0)}
    </Popularity>
    <TextOverview>{overview}</TextOverview>
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
      <StyledLink to="/">← Back to movies list</StyledLink>

      <PageBackground image={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} />


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

    </DetailsContainer>
  );
};

export default MovieDetails;

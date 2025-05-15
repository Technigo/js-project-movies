import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Details = () => {
  const { id } = useParams(); // Assuming your route is /details/:id
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6e12c92fda59e113d79a5c9c5abd897b`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>Movie Details</h2>
      {movie ? (
        <>
          <p>
            <strong>Title:</strong> {movie.title}
          </p>
          <p>
            <strong>About:</strong> {movie.overview}
          </p>
          <p>
            <strong>Release date:</strong> {movie.release_date}
          </p>
          {/* Add more fields as needed */}
        </>
      ) : (
        <p>Movie not found!</p>
      )}
      <Link to="/">
        <button>Back to Movies</button>
      </Link>
    </>
  );
};

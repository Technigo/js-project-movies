import { useEffect } from "react";

const Movies = () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => console.log(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <div>Movies</div>;
};

export default Movies;

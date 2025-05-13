import { movies } from "../data/movies.json";

const Home = () => {
  return (
    <main>
    <h1>Movies</h1>
    <ul>
      {movies.map((movie) => (
        <li>{movie.title}</li>
      ))}
    </ul>
    </main>
  );
}

export default Home;
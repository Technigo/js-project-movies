import { useEffect, useState } from 'react';


const API_KEY = '830e7f8d39529be36377801e8d5b2393';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;



export const App = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL)
      if (response.ok) {
        const data = await response.json();

        setMovies(data.results);
        console.log('movies', data.results);
      } else {
        console.error('Oooops, something went wrong');
      }
     } catch (error) {
        console.error('fetch error:', error);
      } finally  {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchMovies();
    }, []);
  
  return (
    <div>
      <h1>Movies</h1>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
    </div>
  );
};
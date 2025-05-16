import { useEffect, useState } from 'react'
import Card from '../components/Card.jsx'
import Header from '../components/Header.jsx';


const MoviesList = () => {
  // we are going to use the useState hook to create a state variable called movies
  const [movies, setMovies] = useState([])

  // here we can use the useEffect hook to fetch data from the AP
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;


  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=99&with_release_type=2|3&region=US&with_watch_providers=179&primary_release_date.lte=2025-05-15&vote_count.gte=100&vote_average.gte=5&sort_by=release_date.desc&api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching Movies:', error));


  }, []);

  return (
    <>
      <Header />
      {movies.length && movies.map(movie => <Card key={movie.id} movie={movie} />)}
    </>
  )
}

export default MoviesList



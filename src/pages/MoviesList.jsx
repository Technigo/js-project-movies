import { useEffect, useState } from 'react'
import Card from '../components/Card.jsx'


const MoviesList = () => {
  // we are going to use the useState hook to create a state variable called movies
  const [movies, setMovies] = useState([])

  // here we can use the useEffect hook to fetch data from the AP
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=99&sort_by=release_date.desc&page=1&api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching Movies:', error));


  }, []);

  return (
    <>
      <div>Movies</div>
      {movies.length && movies.map(movie => <Card movie={movie.title} />)}
    </>
  )
}

export default MoviesList


import { useEffect, useState } from 'react'
import Card from "../components/card.jsx"

const Movies = () => {
  const [movies, setMovies] = useState([]) //variabel that can change and rerender at update
  
  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        console.log("What is happening", data.results)
        setMovies(data.results || [])
      })
      .catch((error) => console.error('Error fetching movies:', error))
  }, [])

  return (
    <>
      <h1>The Popular Movies</h1>
      {movies.length > 0 ? (
        movies.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </> 
  )
}

export default Movies
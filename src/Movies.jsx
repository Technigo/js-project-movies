import React from 'react'

// this is the "main" page. When you get to the website you should get to this page. 
// It will show the movies that we fetch from the API
// Removed unused variable 'apikey'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

const Movies = () => {

    const [movies, setMovies] = useState([])
    // Do not expose the API key but add it to an env file instead.
const apiKey = import.meta.env.VITE_TMDB_API_KEY
// Fetch the data in the useEffect hook with empty dependency array []

// https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1

// Do proper error handling, and use asyns/await or .then()
useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then((response) => response.json())
    .then((data) => setMovies(data.results)) // save the movies to the state varable
    .catch((error) => console.error('Error fetching movies:', error))

}, [apiKey]);

return (
    <>
      <h1>The Popular Movies</h1>
      {movies.length > 0 ? movies.map(movie => <Card key={movie.id} movie={movie.name || movie.title}  />) : <p>Fetching...</p>}
    </>
);
}

export default Movies
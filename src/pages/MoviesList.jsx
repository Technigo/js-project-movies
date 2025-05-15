import React, { useEffect } from 'react'

const MoviesList = () => {
  // here we can use the useEffect hook to fetch data from the API


  const apiKey = import.meta.env.VITE_TMDB_API_KEY;


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=99&sort_by=release_date.desc&page=1&api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => console.log(data.results))
      .catch((error) => console.error('Error fetching Movies:', error));


  }, []);




  return (
    <div>Movies</div>
  )
}

export default MoviesList


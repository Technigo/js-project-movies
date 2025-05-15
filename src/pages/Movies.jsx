import React, { useEffect } from 'react'

const Movies = () => {
  // here we can use the useEffect hook to fetch data from the API


  const apiKey = import.meta.env.VITE_TMDB_API_KEY;


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => console.log(data.results))
      .catch((error) => console.error('Error fetching Movies:', error));


  }, []);




  return (
    <div>Movies </div>
  )
}

export default Movies


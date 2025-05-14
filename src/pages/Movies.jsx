import { useEffect, useState } from "react"
import Card from "../components/card.jsx"
import styled from "styled-components"

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background-color: #333;
  border-radius: 10px;


  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

`

const Movies = () => {
  const [movies, setMovies] = useState([]) //variabel that can change and rerender at update

  //const apiKey = import.meta.env.VITE_TMDB_API_KEY
  const apiKey2 = "7ddd993a77dbdd9eee8744a30159efbb"

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey2}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {

        setMovies(data.results || [])
      })
      .catch((error) => console.error('Error fetching movies:', error))
  }, [])

  return (
    <>
      <h1>The Popular Movies</h1>
      <MoviesContainer>
        {movies.length > 0 ? (
          movies.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </MoviesContainer>
    </>
  )
}

export default Movies
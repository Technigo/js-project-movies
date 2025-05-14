import { useEffect, useState } from 'react'
import { api } from '../api/api'
import { Card } from '../components/Card.jsx'

export const Home = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    api
      .fetchHorrorMovies()
      .then((data) => {
        setMovies(data.results)
      })
      .catch((err) => {
        console.error(err)
        setError('Something went wrong when fetching movies.')
      })
  }, [])

  if (error) {
    return <p>{error}</p>
  }

  return (
    <section>
      <h1>Popular Horror Movies 👻</h1>
      <div className='movie-list'>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

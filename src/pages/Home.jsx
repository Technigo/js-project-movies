import { useState, useEffect } from 'react'
import { Link } from 'react-router' 
import { API_KEY, BASE_URL } from '../api'
import MovieCard from '../components/MovieCard'

const Home = () => {
  const [movies, setMovies] = useState([]) 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => { 
        if (!res.ok) throw new Error('Network response was not OK')
        return res.json()
      })
      .then((data) => {
        setMovies(data.results)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Fetch error:', err)
        setLoading(false)
      })
    }, [])

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p>Loading…</p>
      </main>
    )
  }

  return (
    <main className="p-2"> 
      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {movies.map((m) => (
          <li key={m.id}>
            <Link to={`/movie/${m.id}`}>
              <MovieCard {...m} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
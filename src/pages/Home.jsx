import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API_KEY, BASE_URL } from '../api'

const Home = () => {
  // 1. Local state to hold our movies & loading flag
  const [movies, setMovies] = useState([]) // movies will hold the array we get back from the API.
  const [loading, setLoading] = useState(true) // loading will be true until we get the data.

  // 2. Fetch popular movies once, when the component mounts
  useEffect(() => {
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => { 
        if (!res.ok) throw new Error('Network response was not OK')
        return res.json()
      })
      .then((data) => {
        setMovies(data.results)    // save the array of movies
        setLoading(false)          // turn off loading
      })
      .catch((err) => {
        console.error('Fetch error:', err)
        setLoading(false)          // even on error, stop showing "Loading…"
      })
  }, []) // empty array means "this runs once on mount"

  // 3. Show a simple loading message while we wait (when loading is true)
  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p>Loading…</p>
      </main>
    )
  }

  // 4. Once we have the data, render the list
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
      <ul className="space-y-2">
        {movies.map((movie) => (
          <li key={movie.id}>
            {/* 
              We map each movie to an <li> and wrap the title in a React Router <Link> so clicks will navigate to our detail page. 
            */}
            <Link
              to={`/movie/${movie.id}`} // This will be the URL for the movie detail page
              className="text-blue-600 hover:underline"
            >
              {/*// Display the movie’s title followed by its release year (first 4 chars of the release_date)*/}
              {movie.title} ({movie.release_date.slice(0, 4)})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
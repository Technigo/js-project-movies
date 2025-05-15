import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'  // Import Link from react-router-dom to create links to other pages
import { API_KEY, BASE_URL, IMAGE_BASE } from '../api' 
import NotFound from './NotFound'

const MovieInfo = () => {
  const { id } = useParams() // Get the movie ID from the URL parameters
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true) // Set loading to true before fetching data
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        if (!res.ok) throw new Error('Movie not found')
        return res.json() // Parse the response as JSON
      })
      .then((data) => {
        setMovieDetails(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Fetch error:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [id]) // Fetch movie details when the component mounts or when the ID changes

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p>Loading…</p>
      </main>
    )
  }

  if (error) {
    return (
      <NotFound />
    )
  }

  return (
    <main className="relative min-h-screen text-white">
      {/* Backdrop */}
      {movieDetails.backdrop_path && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${IMAGE_BASE}/w1280${movieDetails.backdrop_path})`,
          }}
        >
          {/* Overlay with correct opacity */}
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-8 max-w-3xl mx-auto">
        <Link to="/" className="inline-block mb-4 text-blue-300 hover:underline drop-shadow-lg/50">
          ← Back to Movies
        </Link>

        <h1 className="text-3xl font-bold mb-2 drop-shadow-lg/50">{movieDetails.title}</h1>
        <p className="text-sm text-gray-300 mb-4">
          {movieDetails.release_date?.slice(0, 4)} &middot; {movieDetails.vote_average?.toFixed(1)} ⭐
        </p>

        {movieDetails.poster_path && (
          <img
            src={`${IMAGE_BASE}/w500${movieDetails.poster_path}`}
            alt={`${movieDetails.title} poster`}
            className="w-full max-w-md rounded shadow mb-6 border-6 border-white"
          />
        )}

        {movieDetails.overview && (
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-2 drop-shadow-md/40">About:</h2>
            <p className="text-base leading-relaxed drop-shadow-sm/40">{movieDetails.overview}</p>
          </section>
        )}
      </div>
    </main>
  )
}

export default MovieInfo
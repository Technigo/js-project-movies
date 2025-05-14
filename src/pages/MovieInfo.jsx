import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'  // Import Link from react-router-dom to create links to other pages
import { API_KEY, BASE_URL, IMAGE_BASE } from '../api' 

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
        console.log(data)
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
      <main className="flex items-center justify-center h-screen">
        <p>Error: {error}</p>
      </main>
    )
  }

  return (
    <main className="p-4 max-w-3xl mx-auto">
      {/* back link */}
      <Link to="/" className="inline-block mb-4 text-blue-600 hover:underline">
        ← Back to Movies
      </Link>

      {/* title + metadata */}
      <h1 className="text-3xl font-bold mb-2">{movieDetails.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {movieDetails.release_date?.slice(0,4)} &middot; {movieDetails.vote_average} ⭐
      </p>

      {/* poster */}
      {movieDetails.poster_path && ( // Check if poster_path exists before rendering the image
        // Use the IMAGE_BASE and append the size and path
        // The w500 class is used to set the width to 500px
        // The h-auto class is used to set the height to auto, maintaining the aspect ratio
        <img
          src={`${IMAGE_BASE}/w500${movieDetails.poster_path}`}
          alt={`${movieDetails.title} poster`}
          className="w-full rounded shadow mb-6"
        />
      )}

      {/* backdrop */}
      {movieDetails.backdrop_path && (
        <img
          src={`${IMAGE_BASE}/w1280${movieDetails.backdrop_path}`}
          alt={`${movieDetails.title} backdrop`}
          className="w-full rounded shadow mb-6"
        />
      )}

      {/* overview */}
      {movieDetails.overview && (   
        <section>
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-base leading-relaxed">{movieDetails.overview}</p>
        </section>
      )}
    </main>
  )
}

export default MovieInfo
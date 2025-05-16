import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { API_KEY, BASE_URL, IMAGE_BASE } from '../api' 
import NotFound from './NotFound'

const MovieInfo = () => {
  const { id } = useParams() 
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        if (!res.ok) throw new Error('Movie not found')
        return res.json()
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
  }, [id]) 

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
      {movieDetails.backdrop_path && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${IMAGE_BASE}/w1280${movieDetails.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
      )}

      <div
        className="
          relative z-10
          p-4 lg:p-8
          max-w-full lg:max-w-5xl
          mx-auto">
        <Link
          to="/"
          className="
            inline-block
            text-blue-300 hover:underline
            drop-shadow-lg/50">
            ← Back to Movies
        </Link>

        <div className="mt-6 lg:mt-20 flex flex-col lg:flex-row lg:items-start lg:gap-8">
          {movieDetails.poster_path && (
            <img
              src={`${IMAGE_BASE}/w500${movieDetails.poster_path}`}
              alt={`${movieDetails.title} poster`}
              className="
                w-full
                lg:w-1/3
                rounded shadow mb-6 lg:mb-0
                border-6 border-white"/>
          )}

          <div className="flex-1 lg:pl-8">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2 drop-shadow-lg">
              {movieDetails.title}
            </h1>
            <p className="text-sm lg:text-base text-gray-300 mb-4">
              {movieDetails.release_date?.slice(0,4)} &middot; {movieDetails.vote_average?.toFixed(1)} ⭐
            </p>
            {movieDetails.overview && (
              <section className="text-center lg:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-2 drop-shadow-md">
                  About:
                </h2>
                <p className="text-base lg:text-lg leading-relaxed drop-shadow-sm">
                  {movieDetails.overview}
                </p>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default MovieInfo

import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import MovieInfo from '../components/MovieInfo'
import BackButton from '../components/BackButton'
import { Loader } from '../components/Loader'
import NotFound from '../components/NotFound'

const Details = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const imageBaseUrl = 'https://image.tmdb.org/t/p/' //secure base url
  const backgroundImgSize = 'w1280'
  const posterSize = 'w500'

  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    const fetchMovieDetail = async () => {

      try {
        setLoading(true)
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
        if (!response.ok) {
          if (response.status === 404) {
            setNotFound(true)
          }
          throw new Error(`Error fetching movie details. Response status: ${response.status}`)
        }
        const data = await response.json()
        setMovieDetails(data)
      } catch (error) {
        console.error(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovieDetail()
  }, [])

  return (
    <section>

      {loading && <Loader />}
      {notFound && <NotFound />}

      <div
        className='min-h-screen flex flex-col justify-end bg-cover bg-center'
        style={{
          backgroundImage: movieDetails.backdrop_path
            ? `linear-gradient(
           to top,
           rgba(0,0,0,0.9)   0%,
           rgba(0,0,0,0)    50%
         ),
         url(${imageBaseUrl}${backgroundImgSize}${movieDetails.backdrop_path})`
            : undefined
        }}>

        <div className='flex flex-col justify-between z-20 p-[50px] pt-[20px] min-h-screen gap-2'>
          <Link
            to={'/'}
          >
            <BackButton />
          </Link>

          <div className='flex flex-col padding gap-4 min-[577px]:flex-row'>
            <img
              className='border-3 border-white max-w-[300px]'
              src={imageBaseUrl + posterSize + movieDetails.poster_path}
              alt={movieDetails.title}
            />
            <MovieInfo
              title={movieDetails.title}
              score={(Math.round(movieDetails.vote_average * 10) / 10).toFixed(1)}
              desc={movieDetails.overview} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details

import { Link } from 'react-router'

const MovieCard = ({ movie }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/'
  const imageSize = 'w342'

  return (
    <Link
      to={`/movies/${movie.id}`}
      className='relative w-full min-[370px]:w-1/2 min-[570px]:w-1/3 min-[820px]:w-1/4'
    >
      <img
        className='w-full h-full object-cover'
        src={imageBaseUrl + imageSize + movie.poster_path}
        alt={`${movie.title} poster`} />
      <div className='absolute top-0 bottom-0 left-0 right-0 text-white bg-black/75 px-5 py-10 flex flex-col justify-end gap-5 opacity-0 hover:opacity-100'>
        <h2 className='text-3xl font-bold'>{movie.title}</h2>
        <p className=''>Released {movie.release_date}</p>
      </div>
    </Link>
  )
}

export default MovieCard
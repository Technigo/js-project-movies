import { IMAGE_BASE } from '../api'

const MovieCard = ({ title, release_date, vote_average, poster_path }) => {
  return (
    <div className="relative group">
      <div className="aspect-[2/3] w-full">
        <img
          src={`${IMAGE_BASE}/w342${poster_path}`}
          alt={`${title} poster`}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="
          absolute inset-0 
          bg-black bg-opacity-0 
          opacity-0 
          group-hover:bg-opacity-100 
          group-hover:opacity-70 
          flex flex-col justify-center items-center 
          text-white p-4
          transition ease-in-out duration-300">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{release_date.slice(0, 4)}</p>
        <p className="text-sm">{vote_average.toFixed(1)} ⭐</p>
      </div>
    </div>
  )
}

export default MovieCard
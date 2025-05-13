import { IMAGE_BASE } from '../api'
// This component will display a single movie card
// It will be used in the Home component to display a list of movies
// and in the MovieDetail component to display the movie's poster

const MovieCard = ({ id, title, release_date, vote_average, poster_path }) => {
  return (
    <div className="relative">
      {/* Poster image */}
      <img
        src={`${IMAGE_BASE}/w342${poster_path}`} // Use the IMAGE_BASE and append the size and path
        alt={`${title} poster`}
        className="w-full h-auto"
      />

      {/* Hover overlay */}
      {/* This div will show up when the user hovers over the image */}
      {/* It will contain the movie title, release date, and rating */}
      {/* The opacity is set to 0 by default and changes to 70 on hover */}
      {/* The flex classes center the text inside the div */}
      {/* The transition class makes the opacity change smooth */}
      <div className="
        absolute inset-0 
        bg-black bg-opacity-70 
        opacity-0 hover:opacity-70 
        flex flex-col justify-center items-center
        text-white p-4
        transition-opacity
      ">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{release_date.slice(0, 4)}</p>
        <p className="text-sm">{vote_average} ⭐</p>
      </div>
    </div>
  )
}

export default MovieCard
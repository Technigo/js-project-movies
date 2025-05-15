import { IMAGE_BASE } from '../api'
// This component will display a single movie card
// It will be used in the Home component to display a list of movies
// and in the MovieDetail component to display the movie's poster

const MovieCard = ({ title, release_date, vote_average, poster_path }) => {
  return (
    <div className="relative group">
      {/* Poster with fixed aspect ratio */}
      <div className="aspect-[2/3] w-full">
        <img
          src={`${IMAGE_BASE}/w342${poster_path}`}
          alt={`${title} poster`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hover overlay */}
      {/* This div will be shown when the user hovers over the movie poster */}
      {/* The absolute class is used to position the overlay on top of the poster */}
      {/* The inset-0 class is used to stretch the overlay to cover the entire poster */}
      {/* The bg-black class is used to set the background color to black */}
      {/* The bg-opacity-0 class is used to set the initial opacity to 0 */}
      {/* The opacity-0 class is used to set the initial opacity to 0 */}
      {/* The group-hover:bg-opacity-70 class is used to set the background opacity to 70% when the parent is hovered */}
      {/* The group-hover:opacity-80 class is used to set the overlay opacity to 80% when the parent is hovered */}
      {/* The flex class is used to create a flex container */}
      {/* The flex-col class is used to stack the child elements vertically */}
      {/* The justify-center class is used to center the child elements vertically */}
      {/* The items-center class is used to center the child elements horizontally */}
      {/* The text-white class is used to set the text color to white */}
      {/* The p-4 class is used to add padding around the overlay */}
      {/* The transition class is used to add a smooth transition effect */}
      {/* The ease-in-out class is used to set the transition timing function */}
      {/* The duration-300 class is used to set the transition duration to 300ms */}
      <div
        className="
          absolute inset-0 
          bg-black bg-opacity-0 
          opacity-0 
          group-hover:bg-opacity-100 
          group-hover:opacity-70 
          flex flex-col justify-center items-center 
          text-white p-4
          transition ease-in-out duration-300
        "
        >
        {/* Movie title */} 
        {/* The text-lg class is used to set the font size to large */}
        {/* The font-bold class is used to set the font weight to bold */}
        {/* The text-sm class is used to set the font size to small */}
        {/* The release_date is sliced to get only the year */}
        {/* The vote_average is displayed with a star emoji */}
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{release_date.slice(0, 4)}</p>
        <p className="text-sm">{vote_average.toFixed(1)} ⭐</p>
      </div>
    </div>
  )
}

export default MovieCard
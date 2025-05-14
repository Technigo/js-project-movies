import { Link } from 'react-router-dom'

export const Card = ({ movie }) => {
  console.log(movie)
  return (
    <Link to={`/movies/${movie.title}`}>
      <h2>{movie.title}</h2>
      <p>Releasedate: {movie.release_date}</p>
      <img
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt={`Poster for ${movie.title}`}
      />
    </Link>
  )
}

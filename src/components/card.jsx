const Card = ({ movie }) => {
  return (
    <div>
      <p>{movie.title}</p>
      <img
        src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}
        alt={movie.title}
      />
      <p>{movie.release_date}</p>
    </div>
  )
}
export default Card
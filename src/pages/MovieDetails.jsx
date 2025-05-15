import { Link, useParams } from "react-router"


function MovieDetails() {
  const { movieTitle } = useParams()

  return (
    <div>
      <Link to="/">Back to Movies</Link>
      <h2>{movieTitle}</h2>

    </div>
  )
}

export default MovieDetails
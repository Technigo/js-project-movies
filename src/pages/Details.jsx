import { Link } from "react-router-dom"

export const Details = () => {
  return (
    <>
      <h2>Details of movie</h2>
      <Link to={`/`}>
        <button>Back to Movies</button>
      </Link>
    </>
  )
}
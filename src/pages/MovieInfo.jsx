import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export const MovieInfo = () => {
  const params = useParams()
  //const [movieInfo SetMovieInfo] = useState({}) // Recieves an object with the movie info

  //Check if the movieID exists
  //if (!params.id) {
  //  return <p>Movie not found</p>
  //}

  useEffect(() => {
    // Fetch info
  }, [])

  return (
    <>
      <section>
        <h1>Movie Info</h1>
        <p>Title: {params.title}</p>
        <p>Release date: </p>
        <p>Rating: {params.vote_average}</p>
        <img
          src='https://image.tmdb.org/t/p/w342/your_image_path_here.jpg'
          alt={`Poster for ${params.title}`}
        />
      </section>
      <Link to='/'>Back</Link>
    </>
  )
}

// Link to go back to the homepage
// <Link to='/'>Back</Link>

// Dynamic segments

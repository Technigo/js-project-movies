import { useState, useEffect } from 'react' // Import useState and useEffect from React to manage state and side effects
import { Link } from 'react-router-dom' // Import Link from react-router-dom to create links to other pages
import { API_KEY, BASE_URL } from '../api' // Import the API_KEY and BASE_URL from the api.js file
import MovieCard from '../components/MovieCard' // Import the MovieCard component to display each movie

const Home = () => {
  // 1. Local state to hold our movies & loading flag
  const [movies, setMovies] = useState([]) // movies will hold the array we get back from the API.
  const [loading, setLoading] = useState(true) // loading will be true until we get the data.

  // 2. Fetch popular movies once, when the component mounts
  useEffect(() => {
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => { 
        if (!res.ok) throw new Error('Network response was not OK') // Check if the response is OK
        // If the response is not OK, throw an error
        // This will be caught in the catch block below
        // If the response is OK, return the response as JSON
        // This will be passed to the next .then() block
        // The .json() method returns a promise that resolves with the result of parsing the body text as JSON
        // The data will be an object with a results property that is an array of movies
        // The API returns an object with a results property that is an array of movies
        // The results property is an array of objects, each representing a movie
        // The object has properties like id, title, release_date, vote_average, and poster_path
        // The poster_path property is a string that contains the path to the movie's poster image
        return res.json()
      })
      .then((data) => {
        setMovies(data.results)    // save the array of movies
        setLoading(false)          // turn off loading
      })
      .catch((err) => {
        console.error('Fetch error:', err)
        setLoading(false)          // even on error, stop showing "Loading…"
      })
  }, []) // empty array means "this runs once on mount"

  // 3. Show a simple loading message while we wait (when loading is true)
  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen"> {/* Center the loading message */}
        <p>Loading…</p>
      </main>
    )
  }

  // 4. Once we have the data, render the list
  return (
    // 5. Use Tailwind CSS classes to style the page
    // 6. Use React Router <Link> to navigate to the movie detail page
    // 7. Use the movie title and release date in the link
    <main className="p-4"> 
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1> 
      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3"> {/* Use Tailwind CSS grid classes to create a responsive grid layout */}
        {movies.map((m) => (
          <li key={m.id}>
            <Link to={`/movie/${m.id}`}>
              <MovieCard {...m} /> {/* Spread operator to pass all movie props. Here, the {...m} spread gives MovieCard all of m.id, m.title, m.release_date, m.vote_average, and m.poster_path automatically. */}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
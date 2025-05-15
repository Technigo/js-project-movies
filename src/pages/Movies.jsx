import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import LoadingSpinner from '../components/Spinner'

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 767px) {
    gap: 1rem;
    padding: 1rem;
  }
`

const Heading = styled.h1`
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
  color: white;

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
`

const Select = styled.select`
  background-color: #1f1f1f;
  color: white;
  border: 1px solid #ff4575;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: 2px solid #ff79a3;
  }

  @media (max-width: 767px) {
    width: 100%;
    font-size: 0.9rem;
  }
`

const Label = styled.label`
  display: none;
`

const Message = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-top: 2rem;
  color: #bbbbbb;
`

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('popular')
  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`
        )
        if (!res.ok) throw new Error('Failed to fetch movies')
        const data = await res.json()

        if (Array.isArray(data.results)) {
          setMovies(data.results)
        } else {
          console.error('Unexpected response structure:', data)
          setMovies([])
        }
      } catch (err) {
        console.error(err)
        setMovies([])
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [category, apiKey])

  return (
    <>
      <Heading>
        Movies – {category.charAt(0).toUpperCase() + category.slice(1)}
      </Heading>

      <SelectWrapper>
        <Label htmlFor="category">Choose category</Label>
        <Select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="popular">Popular</option>
          <option value="top_rated">Top Rated</option>
          <option value="upcoming">Upcoming</option>
        </Select>
      </SelectWrapper>

      {loading ? (
        <>
          <LoadingSpinner />
          <Message>Loading movies…</Message>
        </>
      ) : movies.length > 0 ? (
        <Grid>
          {movies.map((movie) =>
            movie.id ? <Card key={movie.id} movie={movie} /> : null
          )}
        </Grid>
      ) : (
        <Message>No movies found. Try another category.</Message>
      )}
    </>
  )
}

export default Movies

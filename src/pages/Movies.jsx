import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

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

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  padding: 0 1rem;
`

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 0.9rem;
  }
`

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('popular')
  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching movies:', error)
        setLoading(false)
      })
  }, [category])

  return (
    <>
      <Heading>Movies – {category.charAt(0).toUpperCase() + category.slice(1)}</Heading>
      <SelectWrapper>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="popular">Popular</option>
          <option value="top_rated">Top Rated</option>
          <option value="upcoming">Upcoming</option>
        </Select>
      </SelectWrapper>
      {loading ? <p>Loading...</p> : <Grid>{movies.map((movie) => <Card key={movie.id} movie={movie} />)}</Grid>}
    </>
  )
}

export default Movies

const API_BASE_URL = 'https://api.themoviedb.org/3'

const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTAyZmFjNWU3ODQ4MjI2NWYzYzVhMmNkNDhhNTEyMyIsIm5iZiI6MTc0NzAzODI1NS4yMzYsInN1YiI6IjY4MjFiMDJmZThhYjJlYzM4YjRiNDNhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukocEtoyisWi6NskXjCfazfLJ5eCTn4wr0cVd3dZcI0'

const defaultOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTH_TOKEN}`
  }
}

export const api = {
  // Fetch popular horror movies
  fetchHorrorMovies: async () => {
    try {
      const url = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27`
      const response = await fetch(url, defaultOptions)
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()


      if (!data || !data.results) {
        throw new Error('Invalid API response structure')
      }

      return data
    } catch (error) {
      console.error('Error fetching horror movies:', error)
      throw error
    }
  },

fetchHorrorMoviesByDecade: async (decade) => {
  try {
    const url = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&primary_release_date.gte=${decade}-01-01&primary_release_date.lte=${decade + 9}-12-31&with_genres=27`

    const response = await fetch(url, defaultOptions)
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data || !data.results) {
      throw new Error('Invalid API response structure')
    }

    return data
  } catch (error) {
    console.error('Error fetching horror movies by decade:', error)
    throw error
  }
},

  // Fetch movie details by ID
  fetchMovieById: async (id) => {
    try {
      const url = `${API_BASE_URL}/movie/${id}?language=en-US`
      const response = await fetch(url, defaultOptions)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('404 - Movie not found')
        }
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()

      if (!data || data.success === false) {
        throw new Error('Movie not found or invalid data')
      }

      return data
    } catch (error) {
      console.error('Error fetching movie details:', error)
      throw error
    }
  }
}

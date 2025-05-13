const API_BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTAyZmFjNWU3ODQ4MjI2NWYzYzVhMmNkNDhhNTEyMyIsIm5iZiI6MTc0NzAzODI1NS4yMzYsInN1YiI6IjY4MjFiMDJmZThhYjJlYzM4YjRiNDNhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukocEtoyisWi6NskXjCfazfLJ5eCTn4wr0cVd3dZcI0'

// Default request options with authorization
const defaultOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTH_TOKEN}`
  }
}

export const api = {
  fetchMovies: async () => {
    const url = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27`
    const response = await fetch(url, defaultOptions)
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }
    return response.json()
  }
}

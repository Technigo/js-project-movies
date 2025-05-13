const API_BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`

export const api = {
  fetchMovies: async () => {
    const response = await fetch(`${API_BASE_URL}/horror`)
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }
    return response.json()
  }
}



const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=horror';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTAyZmFjNWU3ODQ4MjI2NWYzYzVhMmNkNDhhNTEyMyIsIm5iZiI6MTc0NzAzODI1NS4yMzYsInN1YiI6IjY4MjFiMDJmZThhYjJlYzM4YjRiNDNhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukocEtoyisWi6NskXjCfazfLJ5eCTn4wr0cVd3dZcI0'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
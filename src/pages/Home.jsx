import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API_KEY, BASE_URL } from '../api'

const Home = () => {
  return (
    <main>
    <h1>Movies</h1>
    <ul>
      {movies.map((movie) => (
        <li>{movie.title}</li>
      ))}
    </ul>
    </main>
  );
}

export default Home;
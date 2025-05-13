import React, { useState, useEffect } from 'react';
const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch popular movies from the API
        
        // Example API endpoint:
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.error('Error fetching movies:', error));
    }, []);

    return (
        <div>
            {/* Render movies or any other UI here */}
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;

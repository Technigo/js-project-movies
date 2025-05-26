# Movies App 🎬

This is a multi-page movie application where users can browse popular movies and view detailed information. It's built with React and uses the [The Movie Database (TMDB) API](https://www.themoviedb.org/) to fetch real-time movie data. This project focuses on using React Router, dynamic routes, and building responsive UI components.

## Live Demo

Check out the live website at [Movies App on Netlify](https://movies-app-rn.netlify.app)

## Features

- **Popular Movies List:** Shows a grid of trending movies fetched from TMDB.
- **Movie Details Page:** Click a movie to view poster, overview, rating, release year and more.
- **Dynamic Routing:** Each movie has its own route using `react-router-dom`.
- **Not Found Page:** Custom 404 for invalid movie IDs or broken links.
- **Loading Spinner:** Smooth loading indicators while fetching data.
- **Dark/Light Mode Toggle:** Seamless switch between dark and light themes.
- **Responsive Design:** Optimized for screens from 320px to full desktop.
- **Accessibility Considerations:** Semantic HTML, contrast checks, and Lighthouse score above 95.

## Project Structure

- **`App.jsx`:** Main layout, routes, and dark mode toggle.
- **`components/MovieList.jsx`:** Fetches and displays the grid of movies.
- **`components/MovieDetails.jsx`:** Displays detailed info for each selected movie.
- **`components/NotFound.jsx`:** Fallback for unknown routes or movie IDs.
- **`App.css`:** Styles for layout, themes, and responsiveness.

## How to Run Locally

1. Clone this repository  
   `git clone https://github.com/RicardoNicolau/js-project-movies.git`
2. Navigate to the project folder  
   `cd js-project-movies`
3. Install dependencies  
   `npm install`
4. Create a `.env` file and add your TMDB API key:  
   `REACT_APP_TMDB_API_KEY=your_api_key_here`
5. Run the app locally  
   `npm start`
6. Visit `http://localhost:3000` in your browser

## Future Improvements

- Add filters for genres or ratings
- Support for searching movies
- Add trailers and cast info from TMDB
- Save liked movies using localStorage
- Pagination or infinite scroll

© 2025 Movies App. All Rights Reserved. | Developed & Designed by DevByRico

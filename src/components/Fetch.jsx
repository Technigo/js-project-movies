// import { useEffect, useState } from 'react';


// const API_KEY = '830e7f8d39529be36377801e8d5b2393';
// const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;



// export const App = () => {

//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchMovies = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(API_URL)
//       if (response.ok) {
//         const data = await response.json();

//         setMovies(data.results);
//         console.log('movies', data.results);
//       } else {
//         console.error('Oooops, something went wrong');
//       }
//      } catch (error) {
//         console.error('fetch error:', error);
//       } finally  {
//         setLoading(false);
//       }
//     };

//     useEffect(() => {
//       fetchMovies();
//     }, []);
  
//   return (
//     <div>
//       <h1>Movies</h1>
//         <ul>
//           {movies.map(movie => (
//             <li key={movie.id}>{movie.title}</li>
//           ))}
//         </ul>
//     </div>
//   );
// };



// const API_KEY = '830e7f8d39529be36377801e8d5b2393';
// const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
// const API_URL_Details = `https://api.themoviedb.org/3/movie/${movie-id}?api_key=${API_KEY}&language=en-US`;


// export const movieList = () => {
//   const [movie, setMovie] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Fetch thoughts from API on mount
//   useEffect(() => {
//     setLoading(true);
//     setError('');
//     fetch(API_URL)
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch movies');
//         return res.json();
//       })
//       .then((data) => {
//         setMovie(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError('Could not load movies. Please try again later.');
//         setLoading(false);
//       });
//   }, []);

//   // See movie details
//   const seeDetails = (message, onError) => {
//     setError('');
//     setLoading(true);
//     fetch(API_URL_Details, {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ message })
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.message && data._id) {
//           setThoughts((prev) => [data, ...prev]);
//         } else if (data.errors || data.message) {
//           if (onError) onError(data.message || 'Invalid input');
//         }
//         setLoading(false);
//       })
//       .catch(() => {
//         setError('Could not post your thought. Please try again.');
//         setLoading(false);
//       });
//   };

//   return {
//     details,
//     fetch
//   };
// };
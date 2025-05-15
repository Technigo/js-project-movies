
import { BrowserRouter, Routes, Route } from "react-router"
import Header from './components/Header.jsx'
import Movies from './pages/Movies.jsx'
import About from './pages/About.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import NotFound from './pages/NotFound.jsx'

// The Header component will show in all "pages" It is outside of the routing scope.

export const App = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies/:movieId" exact element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
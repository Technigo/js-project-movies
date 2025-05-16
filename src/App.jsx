
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header.jsx'
import Movies from './components/data/pages/Movies.jsx'
import About from './components/pages/About.jsx'
import MovieDetails from './components/pages/MovieDetails.jsx'
import NotFound from './components/pages/NotFound.jsx'

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
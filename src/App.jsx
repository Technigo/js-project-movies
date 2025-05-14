import { ThemeConsumer } from 'styled-components'
import { GlobalStyle } from './GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Welcome } from './components/pages/PopularListWelcome';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { NavBar } from "./components/pages/NavBar";
import { Header } from './components/pages/Header';
import { Movies } from  './components/pages/Movies';
import { MoviesList } from './components/pages/MoviesList';
import { ShowMovies } from './components/pages/ShowMovies';
import { MovieDetails} from './components/pages/MovieDetails';
import { NotFound } from './components/pages/NotFound'

// The Header component will show in all "pages" It is outside of the routing scope.
// The NavBar component will show in all "pages" It is outside of the routing scope.

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


// Removed duplicate App component declaration
import { ThemeConsumer } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Welcome } from './components/pages/welcome.jsx';
import { Contact } from './components/pages/contact.js';
import { Nav } from "./components/pages/Nav.js";
import { Header } from './components/pages/Header.jsx';
import { Movies } from  './components/data/data/Movies.jsx';
import { MoviesList } from './components/pages/MoviesList.js';
import { ShowMovies } from './components/pages/ShowMovies.js';
import { MovieDetails} from './components/pages/MovieDetails.jsx';
import { NotFound } from './components/pages/NotFound.jsx'
import { PopularList } from './components/pages/PopularList.jsx';
import { MovieList } from './/components/pages/MoviesList.js';
import { Card } from './components/pages/Card.jsx';



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
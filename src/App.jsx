<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PopularMovies } from "./pages/PopularMovies"
import { NewMovies } from "./pages/NewMovies"
import { Details } from "./pages/Details"
import { Nav } from "./components/Nav"

export const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/news" element={<NewMovies />} />
          <Route path="/movie/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </main >
  )
}
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PopularMovies } from "./pages/PopularMovies";
import { NewMovies } from "./pages/NewMovies";
import { Details } from "./pages/Details";
// import { MoviePoster } from "./components/MoviePoster"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/news" element={<NewMovies />} />
        <Route path="/movie/:id" element={<Details />} />
        {/* <Route path="/poster" element={<MoviePoster />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
>>>>>>> Stashed changes

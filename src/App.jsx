import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Movies from "./pages/Movies";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";

import NotFound from "./pages/NotFound";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

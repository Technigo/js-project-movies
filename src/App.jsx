import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import MoviesDesc from "./pages/MoviesDesc";
import MoviesList from "./pages/MoviesList";

export const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/about" element={<MoviesDesc />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

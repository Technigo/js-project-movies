import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import MoviesList from "./pages/MoviesList";
import MovieDetails from "./pages/MovieDetails";

export const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movies/:movieid" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

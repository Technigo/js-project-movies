import { BrowserRouter, Routes, Route } from "react-router";
import MoviesList from "./pages/MoviesList";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movies/:movieid" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

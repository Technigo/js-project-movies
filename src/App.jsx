import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MoviePage } from "./pages/MoviePage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
//needs small letter for some reason?????

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviePage />} />
          <Route path="/movies/:movieId" exact element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

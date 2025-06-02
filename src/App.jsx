import { BrowserRouter, Routes, Route } from "react-router"
import MoviesList from "./pages/MoviesList.jsx"
import MovieDetails from "./pages/MovieDetails.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

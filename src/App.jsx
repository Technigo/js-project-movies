import { BrowserRouter, Routes, Route } from "react-router"
import MoviesList from "./pages/MoviesList.jsx"
import MovieDetails from "./pages/MovieDetails.jsx"


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movies/:movieTitle" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

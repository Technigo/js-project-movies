import { BrowserRouter, Routes, Route } from "react-router"
import Header from "./components/Header"
import MoviesList from "./pages/MoviesList.jsx"
import MovieDetails from "./pages/MovieDetails.jsx"


export const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/MovieDetails" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

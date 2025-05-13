import { BrowserRouter, Routes, Route } from "react-router-dom"
import Movies from './pages/Movies.jsx'
import MovieDetail from './pages/MovieDetail'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/moviedetail" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

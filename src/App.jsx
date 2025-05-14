import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieInfo from './pages/MovieInfo'

export const App = () => {
  return (
    <>
    <h1>Movies</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

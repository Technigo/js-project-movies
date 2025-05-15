import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import MovieInfo from './pages/MovieInfo'
import NotFound from './pages/NotFound'

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { Home } from './pages/Home.jsx'
import { MovieInfo } from './pages/MovieInfo.jsx'
import { NotFound } from './pages/NotFound.jsx'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:id' element={<MovieInfo />} />
          <Route path='/movies' element={<Navigate to='/' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

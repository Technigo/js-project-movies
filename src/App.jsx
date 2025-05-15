import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { Home } from './pages/Home.jsx'
import { MovieInfo } from './pages/MovieInfo.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Footer } from './components/Footer'

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
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<MovieInfo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

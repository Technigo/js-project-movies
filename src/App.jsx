import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { Home } from './pages/Home.jsx'
import { MovieInfo } from './pages/MovieInfo.jsx'
import { DecadeView } from './components/DecadeView.jsx'
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
          <Route path='/decade/:decade' element={<DecadeView />} />
          <Route path='/movies' element={<Navigate to='/' />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

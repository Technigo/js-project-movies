import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { Home } from './pages/Home.jsx'
import { MovieInfo } from './pages/MovieInfo.jsx'

export const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:title' element={<MovieInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

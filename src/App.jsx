import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Movies from './pages/Movies'
import About from './pages/About'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'
import styled from 'styled-components'
import Footer from './components/Footer'


const MainWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainWrapper>
      <Footer />
    </BrowserRouter>
  )
}
import { BrowserRouter, Routes, Route } from 'react-router'
import Movies from './pages/Movies'
import Details from './pages/Details'


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/:movieList' element={<Movies />} />
          <Route path='/movies/:movieId' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

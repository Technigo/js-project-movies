import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./styling/GlobalStyle.jsx"
import Movies from "./pages/Movies.jsx"
import MovieDetail from "./pages/MovieDetail"
import NotFound from "./pages/NotFound.jsx"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

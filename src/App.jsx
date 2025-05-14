import { BrowserRoute, Routes, Router } from "react-router"


export const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>



        <h1>Movies</h1>
      </>
      )
}

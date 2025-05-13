import { ThemeConsumer } from 'styled-components'

export const App = () => {
  return (
    <h1>Movies</h1>
  )
}
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import About from "./About";
import Contact from "./Contact";

<Router>
  <NavBar />
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
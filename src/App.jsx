import { ThemeConsumer } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Welcome } from './Welcome';
import { About } from './About';
import { Contact } from './Contact';
import { NavBar } from "./NavBar";
import { GlobalStyle } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes';
import { Movies } from './Movies';
import { MoviesList } from './MoviesList';
import { ShowMovies } from './ShowMovies';
import { Header } from './Header';


export const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <h1>Movies</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
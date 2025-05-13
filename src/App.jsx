import { FrontPage } from './components/FrontPage.jsx';
import { MovieDetails } from './components/MovieDetails.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};



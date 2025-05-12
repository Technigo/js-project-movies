import { FrontPage } from './components/FrontPage.jsx';
import { MovieDetails } from './components/MovieDetails.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const App = () => {
  return (

    <BrowserRouter>
    <main>
      <Routes>
      <Route path="/" element={< FrontPage />} />
      <Route path="/movies/:id" element={< MovieDetails />} />
      </Routes>
    </main>

    </BrowserRouter>
  );
};



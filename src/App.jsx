import { useEffect, useState } from "react";
import { FrontPage } from "./components/FrontPage.jsx";
import { MovieDetails } from "./components/MovieDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";

export const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 sekunders splash

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

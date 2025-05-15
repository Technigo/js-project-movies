import { FrontPage } from "./components/FrontPage.jsx";
import { MoviePage } from "./components/MoviePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { SplashScreen } from "./components/SplashScreen.jsx";

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
          <Route path='/movies/:id' element={<MoviePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

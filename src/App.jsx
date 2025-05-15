<<<<<<< HEAD
import { FrontPage } from './components/FrontPage.jsx';
import { MovieDetails } from './components/MovieDetails.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen.jsx';

=======
import { useEffect, useState } from "react";
import { FrontPage } from "./components/FrontPage.jsx";
import { MovieDetails } from "./components/MovieDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import { LoadingComponent } from "./components/LoadingComponent.jsx";
>>>>>>> not-found-page

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
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

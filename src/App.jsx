// src/App.jsx
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import { AnimatePresence } from 'framer-motion'
import Splash from './components/Splash'
import Home from './pages/Home'
import MovieInfo from './pages/MovieInfo'
import NotFound from './pages/NotFound'

export const App = () => {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <Splash
          key="splash"
          onFinish={() => setShowSplash(false)}
        />
      ) : (
        <BrowserRouter key="content">
          {/* push content below fixed navbar */}
          <div className="pt-12">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieInfo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </AnimatePresence>
  )
}
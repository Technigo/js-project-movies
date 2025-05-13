import React from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Welcome }  from './Welcome'
import { About } from './About'
import { Contact } from './Contact'
import { Nav } from './Nav'
import { MoviesList } from 'pages/MoviesList'
import { ShowMovies } from 'pages/ShowMovies'


export const App = () => {
    return (
        <main>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<MoviesList />} />
                    <Route path="/movies/:slug" element={<ShowMovies />} />
                    <Route path="/" element={<Welcome />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}
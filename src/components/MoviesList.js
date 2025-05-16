import React from 'react'
import { Link } from 'react-router-dom'
import { Movies } from 'components/data/data/Movies'
import movies from 'data/data/movies.json'

export const MoviesList = () => {
    return (
        <section className="movies">
            {movies.map((movies) => (
                <Link key={movies.name} to={`/movies/${movies.slug}`}>
                    <Movies name={movies.name} image={movies.image} />
                </Link>
            ))}
        </section>
    )
}
import React from 'react-router-dom'
import { Movies } from 'components/Movies'
import movies from 'components/data/data/movies.json'

export const Movie = ({ name, image }) => (
    <div className="movie">
        <img src={`/images/${image}`} alt="" />
        <h3>{name}</h3>
    </div>
)

export const MoviesList = () => {
    return (
        <section className="movies-list">
            {movies.map((movie) => (
                <a key={movie.name}>
                    <Movie name={movie.name} image={movie.image} />
                </a>
            ))}
        </section>
    );
}
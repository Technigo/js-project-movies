import React from 'react' 
import { useParams } from 'react-router-dom'
import { Movies } from 'components/data/data/Movies'
import movies from 'components/data/data/movies.json'
export const ShowMovies = () => {
    const params = useParams()
    const moviesMatch = movies.find((movie) => movie.slug === params.slug)
    console.log(params)
    console.log(moviesMatch)
    return (
        <div>
            <Movies name={moviesMatch.name} image={moviesMatch.image} />
            <div className="ShowmoviesPage">
                <Movies name={moviesMatch.name} image={moviesMatch.image} />
                <div className="actions">
                    <button type="button">Select Movie!</button>
                </div>
            </div>
            <div>Show movies page</div>
        </div>
    )
}
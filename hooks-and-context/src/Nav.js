import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'

const Nav = () => {
    const[movie, setMovies] = useContext(MovieContext)
    return (
        <div>
            <h3>Cujo</h3>
            <p>List of Movies: {movie.length}</p>
        </div>
    )
}

export default Nav
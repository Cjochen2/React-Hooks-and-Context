import React, {useState, createContext} from 'react'



export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movie, setMovie] = useState ([
        {
            name: 'The Dark Knight',
            price: '$20'
        },
        {
            name: 'Miracle',
            price: '$15'
        },
        {
            name: '6 Underground',
            price: '$5'
        }
    ]);

    return(
        <MovieContext.Provider value={[movie, setMovie]}>
            {props.children}
        </MovieContext.Provider>
    );
}
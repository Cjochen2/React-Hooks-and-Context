import React from 'react';
import Nav from './Nav';
import MovieList from './MovieList';
import {MovieProvider} from './MovieContext';
import AddMovie from './AddMovie';


function App() {

  return (

    <div className='App'>

      <MovieProvider>
      <Nav/>
      <AddMovie />
      <MovieList />
      </MovieProvider>

    </div>
  );
}

export default App;

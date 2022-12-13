import { useState } from 'react'
import './App.css'
import { MovieFormComponent } from './components/movie-form/movie-form';
import { ArtListComponent } from './components/art-list/art-list';

export function App() {

  return (
    <div className="App">
      <MovieFormComponent/>
      <ArtListComponent/>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MovieFormComponent } from './components/movie-form/movie-form'

export function App() {

  return (
    <div className="App">
      <MovieFormComponent/>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import apiClient from './services/api-client'
import GenreList from './components/GenreList'
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div className="row">
      <div className='col-1 me-5 ms-5 mt-3'><GenreList></GenreList></div>
      <div className='col-10 mt-3'> <GameGrid></GameGrid></div>
        
      </div>
    </>
  )
}

export default App

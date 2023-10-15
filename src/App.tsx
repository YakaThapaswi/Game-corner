import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import apiClient from './services/api-client'

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
<GameGrid></GameGrid>
    </>
  )
}

export default App

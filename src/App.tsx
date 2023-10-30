import { useState } from 'react'

import './App.css'

import GenreList from './components/GenreList'
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import useData,{ Genre } from './hook/useData'
import Platformfilter from './components/Platformfilter'
import { platform,Game } from './hook/useGames'
import Sort from './components/Sort'
export interface GameQuery{
  genre:Genre|null
  plat:platform|null
  sort:string
  search:string
}
function App() {
  const [count, setCount] = useState(0)
  
  const [gameQuery,setgameQuery]=useState<GameQuery>({} as GameQuery)
  console.log(gameQuery.search)
  return (
    <>
      <Navbar searched={(search)=>setgameQuery({...gameQuery,search})}></Navbar>
      <div className="row">
      <div className='col-2 ms-1 mt-5'><GenreList onSelectGenre={(genre)=>setgameQuery({...gameQuery,genre})}></GenreList></div>
      <div className='col-9 mt-3'> 
      <div className="d-flex flex-wrap ">
      <Platformfilter selectedPlatform={(plat)=>setgameQuery({...gameQuery,plat})} onplatform={gameQuery.plat}></Platformfilter>
      <Sort selectsort={(sort)=>setgameQuery({...gameQuery,sort})} selected={gameQuery.sort}></Sort>
      </div>
      <GameGrid gameQuery={gameQuery}></GameGrid>
      </div>
        
      </div>
    </>
  )
}

export default App

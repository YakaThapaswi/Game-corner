import { useEffect, useState } from "react"
import GameCard from "./GameCard";
import './GameCard.css'
import useData,{Genre} from "../hook/useData";
import useGames,{Game, platform} from "../hook/useGames";
import { GameQuery } from "../App";
interface Props{
    gameQuery:GameQuery
    
}
const GameGrid=({gameQuery}:Props)=>{
    const {data,error}=useGames(gameQuery);
    if(error) return(<p className="text-danger">{error.message}</p>)
    return(
        <>
        
        <h1>{gameQuery.genre?.name}  {gameQuery.plat?.name} Games</h1>
        <div className="d-flex flex-wrap">
        {data?.map(game=>(<GameCard key={game.id} game={game}></GameCard>))}
        </div>
        </>
    )
}
export default GameGrid

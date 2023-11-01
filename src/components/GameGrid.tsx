
import GameCard from "./GameCard";
import './GameCard.css'

import useGames from "../hook/useGames";
import { GameQuery } from "../App";
import React from "react";
interface Props{
    gameQuery:GameQuery
    
}
const GameGrid=({gameQuery}:Props)=>{
    const {data,error,fetchNextPage}=useGames(gameQuery,10);
    if(error) return(<p className="text-danger">{error.message}</p>)
    return(
        <>
        
        <h1>{gameQuery.genre?.name}  {gameQuery.plat?.name} Games</h1>
        <div className="d-flex flex-wrap">
            {data?.pages.map(page=>
            <React.Fragment>
                {page?.results.map(game=>(<GameCard key={game.id} game={game}></GameCard>))}
            </React.Fragment>
            
            )}
        
        </div>
        <button type="button" onClick={()=>fetchNextPage()} className="btn btn-primary ms-5">Load more</button>
        </>
    )
}
export default GameGrid

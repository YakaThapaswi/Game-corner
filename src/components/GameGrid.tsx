
import GameCard from "./GameCard";
import './GameCard.css'

import useGames from "../hook/useGames";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
interface Props{
    gameQuery:GameQuery
    
}
const GameGrid=({gameQuery}:Props)=>{
    const {data,error,fetchNextPage,hasNextPage}=useGames(gameQuery,10);
    if(error) return(<p className="text-danger">{error.message}</p>)
    const fetchedGamesCount = data?.pages.reduce((total,page)=>total+page.results.length,0)||0;
    return(
        <>
        <InfiniteScroll
            dataLength={fetchedGamesCount}
            hasMore={!!hasNextPage}
            next={()=>fetchNextPage}
            loader={<div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}
        >
        <h1>{gameQuery.genre?.name}  {gameQuery.plat?.name} Games</h1>
        <div className="d-flex flex-wrap">
            {data?.pages.map(page=>
            <React.Fragment>
                {page?.results.map(game=>(<GameCard key={game.id} game={game}></GameCard>))}
            </React.Fragment>
            
            )}
        
        </div>
        </InfiniteScroll>
        
        </>
    )
}
export default GameGrid

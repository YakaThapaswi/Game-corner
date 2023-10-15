import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import React from "react";
import useGame from "../hook/useGame";
import GameCard from "./GameCard";
import './GameCard.css'
import useData,{Game} from "../hook/useData";

const GameGrid=()=>{
    const {datas,error}=useData<Game>('/games');
    return(
        <>
        {error && <p className="text-danger">{error}</p>}
        <div className="d-flex flex-wrap">
        {datas.map(game=>(<GameCard key={game.id} game={game}></GameCard>))}
        </div>
        </>
    )
}
export default GameGrid

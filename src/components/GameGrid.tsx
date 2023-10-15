import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import React from "react";
import useGame from "../hook/useGame";
import GameCard from "./GameCard";
import './GameCard.css'

const GameGrid=()=>{
    const {games,error}=useGame();
    return(
        <>
        {error && <p className="text-danger">{error}</p>}
        <div className="d-flex flex-wrap">
        {games.map(game=>(<GameCard key={game.id} game={game}></GameCard>))}
        </div>
        </>
    )
}
export default GameGrid

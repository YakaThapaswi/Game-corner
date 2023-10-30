import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import React from "react";
export interface platform
{
    id:number;
    name:string;
    slug:string;
}

export interface Game
{
    id:number|'';
    name:string|'';
    background_image:string|'';
    parent_platforms:{platform:platform}[];
    metacritic:number|'';
}
interface FetchGamesResponse
{
    count:number;
    results:Game[];
}
const useGame=()=>{
    const [games,setgames]=useState<Game[]>([]);
    const [error,setError]=useState("");
    useEffect(()=>{
        apiClient
        .get<FetchGamesResponse>("/games")
        .then(res=> setgames(res.data.results))
        .catch(err=>setError(err.message));
    },[]);
    return {games,error};
}
export default useGame

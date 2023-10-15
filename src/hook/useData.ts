import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import React from "react";
export interface Genre
{
    id:number;
    name:string;
    slug:string;
}
export interface platform
{
    id:number;
    name:string;
    slug:string;
}
export interface Game
{
    id:number;
    name:string;
    background_image:string;
    parent_platforms:{platform:platform}[];
    metacritic:number;
}
interface FetchResponse<T>
{
    count:number;
    results:T[];
}
const useData=<T>(endpoint:string)=>{
    const [datas,setdatas]=useState<T[]>([]);
    const [error,setError]=useState("");
    useEffect(()=>{
        apiClient
        .get<FetchResponse<T>>(endpoint)
        .then(res=> setdatas(res.data.results))
        .catch(err=>setError(err.message));
    },[]);
    return {datas,error};
}
export default useData

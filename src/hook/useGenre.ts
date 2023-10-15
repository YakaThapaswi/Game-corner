import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import React from "react";
export interface Genre
{
    id:number;
    name:string;
    slug:string;
}
interface FetchGenresResponse
{
    count:number;
    results:Genre[];
}
const useGenre=()=>{
    const [genre,setgenre]=useState<Genre[]>([]);
    const [error,setError]=useState("");
    useEffect(()=>{
        apiClient
        .get<FetchGenresResponse>("/genres")
        .then(res=> setgenre(res.data.results))
        .catch(err=>setError(err.message));
    },[]);
    return {genre,error};
}
export default useGenre

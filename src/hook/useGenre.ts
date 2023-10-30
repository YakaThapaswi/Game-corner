import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import gendata from "./genredata";
export interface Genre
{
    id:number;
    name:string;
    slug:string;
    image_background:string
}
interface FetchGenresResponse
{
    count:number;
    results:Genre[];
}
const useGenre=()=>
    
    useQuery<Genre[],Error>({
        
        queryKey:['count','genre'],
        queryFn:()=>
            apiClient
            .get<FetchGenresResponse>("/genres")
            .then(res=>res.data.results),
        initialData:gendata
        
    })
   
export default useGenre

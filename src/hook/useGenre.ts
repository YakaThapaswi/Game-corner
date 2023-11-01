
import APIClient, { FetchResponse } from "../services/api-client";

import { useQuery } from "@tanstack/react-query";
import gendata from "./genredata";
export interface Genre
{
    id:number;
    name:string;
    slug:string;
    image_background:string
}
const apiClient=new APIClient<Genre>("/genres")
const useGenre=()=>
    
    useQuery<FetchResponse<Genre>,Error>({
        
        queryKey:['genre'],
        queryFn:apiClient.getAll,
        
    })
   
export default useGenre

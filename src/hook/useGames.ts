import useData from "./useData";

import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
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
interface FetchResponse
{
    count:number;
    results:Game[];
}
const apiClient=new APIClient<Game>("/games")
const useGames=(gameQuery:GameQuery)=>useQuery<Game[],Error>({
    queryKey:["game",gameQuery],
    queryFn:()=>apiClient.getAll(
    {params:{genres:gameQuery.genre?.id,parent_platforms:gameQuery.plat?.id,ordering:gameQuery.sort,search:gameQuery.search}})
});
export default useGames

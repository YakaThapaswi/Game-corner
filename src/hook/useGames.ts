import useData from "./useData";

import { GameQuery } from "../App";
import apiClient from "../services/api-client";
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
const useGames=(gameQuery:GameQuery)=>useQuery<Game[],Error>({
    queryKey:["game",gameQuery],
    queryFn:()=>apiClient.get<FetchResponse>('/games',
    {params:{genres:gameQuery.genre?.id,parent_platforms:gameQuery.plat?.id,ordering:gameQuery.sort,search:gameQuery.search}})
    .then(res=>res.data.results)
});
export default useGames

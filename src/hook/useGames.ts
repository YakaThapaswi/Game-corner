

import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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

const apiClient=new APIClient<Game>("/games")
const useGames=(gameQuery:GameQuery,pagesize:number)=>useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey:["game",gameQuery],
    queryFn:({pageParam=1})=>apiClient.getAll(
    {params:{genres:gameQuery.genre?.id,
        parent_platforms:gameQuery.plat?.id,
        ordering:gameQuery.sort,
        search:gameQuery.search,
        page:pageParam
    }}),
    keepPreviousData:true,
    getNextPageParam:(lastPage,allpages)=>
    {
        return lastPage.next?allpages.length+1:undefined
    }
});
export default useGames


import APIClient, { FetchResponse } from "../services/api-client";

import { AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";
import { platform } from "./useGames";





const useData=<T>(ikey:string,endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[])=>{
   
    const apiClient=new APIClient<platform>(endpoint)
    return useQuery<FetchResponse<platform>,Error>({
        queryKey:[ikey],
        queryFn:
            apiClient.getAll
    })
}
export default useData

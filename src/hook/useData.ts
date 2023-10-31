import { useEffect, useState } from "react"
import APIClient from "../services/api-client";
import React from "react";
import { AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";
import { platform } from "./useGames";
export interface Genre
{
    id:number;
    name:string;
    slug:string;
    image_background:string

}



const useData=<T>(ikey:string,endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[])=>{
   
    const apiClient=new APIClient<T>(endpoint)
    return useQuery<T[],Error>({
        queryKey:[ikey],
        queryFn:
            apiClient.getAll
    })
}
export default useData

import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import React from "react";
import { AxiosRequestConfig } from "axios";
export interface Genre
{
    id:number;
    name:string;
    slug:string;
    image_background:string

}

interface FetchResponse<T>
{
    count:number;
    results:T[];
}
const useData=<T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[])=>{
    const [datas,setdatas]=useState<T[]>([]);
    const [error,setError]=useState("");
    useEffect(()=>{
        apiClient
        .get<FetchResponse<T>>(endpoint,{...requestConfig})
        .then(res=> setdatas(res.data.results))
        .catch(err=>setError(err.message));
    },deps?[...deps]:[]);
    return {datas,error};
}
export default useData

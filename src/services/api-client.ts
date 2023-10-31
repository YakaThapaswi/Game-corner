import axios , {AxiosRequestConfig, CanceledError} from "axios";
const axiosInstance=axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'df67b66b1b364142b0c73420ccf946fb'
    }
})
interface FetchResponse<T>
{
    count:number;
    results:T[];
}
class APIClient<T>{
    endpoint:string;
    constructor(endpoint:string)
    {
        this.endpoint=endpoint
    }
    getAll=(config:AxiosRequestConfig)=>{
        return axiosInstance.get<FetchResponse<T>>(this.endpoint,config)
        .then(res=>res.data.results)
    }
}
export { CanceledError};
export default APIClient;
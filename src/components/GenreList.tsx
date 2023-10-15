import React from "react"
import useGenre from "../hook/useGenre"
import useData,{Genre} from "../hook/useData";
const GenreList=()=>
{
    const {datas,error}=useData<Genre>('/genres');
    return(
        <>
        <ul>
            {datas.map(gen=><li key={gen.id}>{gen.name}</li>)}
        </ul>
        </>
    );
}
export default GenreList;
import React from "react"
import useGenre from "../hook/useGenre"
import useData,{Genre} from "../hook/useData";
import gendata from "../hook/genredata";

interface Props{
    onSelectGenre:(genre:Genre)=>void;
}
const GenreList=({onSelectGenre}:Props)=>
{
    //const {datas,error}={datas:gendata,error:null};
    const {data,error}=useGenre();
    return(
        <>
            {error && <p className="text-danger">{error.message}</p>}
            <div>
            {data?.map(gen=> 
                <div className="d-flex flex-wrap mb-80" key={gen.id}>
                <img className="me-3" src={gen.image_background} height="35" width="35"></img>
                <p onClick={()=>onSelectGenre(gen)}>{gen.name}</p>
                </div>
                
            )}
            </div>
        </>
    );
}
export default GenreList;
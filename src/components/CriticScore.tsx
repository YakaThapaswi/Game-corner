import React from "react";
interface Props{
    score:number|'';
}
const CriticScore=({score}:Props)=>
{
    
    return(
        <>
    
        <button type="button" className="btn-sm col-2" >{score}</button>
        </>
    );
}
export default CriticScore;

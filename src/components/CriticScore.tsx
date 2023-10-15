import React from "react";
interface Props{
    score:number;
}
const CriticScore=({score}:Props)=>
{
    const colour=score>75?'green':score>65?'yellow':'';
    return(
        <>
    
        <button type="button" className="btn-sm col-2" color={colour}>{score}</button>
        </>
    );
}
export default CriticScore;

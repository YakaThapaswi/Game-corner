import { useRef } from "react";
interface Props{
    searched:(search:string)=>void;
}
const Search=({searched}:Props)=>{
    const ref=useRef<HTMLInputElement>(null)
    return(
        <>
        <form className="d-flex" role="search" onSubmit={(event)=>{event.preventDefault();
            if(ref.current){
                searched(ref.current.value)}
        }}>
        <input className="form-control me-2 mw-1700 w-100" ref={ref} type="search" placeholder="Search" aria-label="Search"/>
       
      </form></>
    );
}
export default Search;
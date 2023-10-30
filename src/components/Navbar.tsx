import React from "react";
import logo from '../assets/gamelogo.jpg'
import Search from "./Search";
interface Props{
  searched:(search:string)=>void;
}
const Navbar=({searched}:Props)=>
{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src={logo} height='50' width='50'></img>
    <Search searched={searched}></Search>
    
  </div>
</nav>

        </>
    )
}
export default Navbar
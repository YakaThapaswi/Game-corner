import React from "react";
import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { platform } from "../hook/useGame";
import { IconType } from "react-icons/lib";
interface Props{
    platforms:platform[];
}
const iconMap:{[key:string]:IconType}={
    pc:FaWindows,
    playstation:FaPlaystation,
    xbox:FaXbox,
    nintendo:SiNintendo,
    mac:FaApple,
    linux:FaLinux,
    android:FaAndroid,
    ios:MdPhoneIphone,
    web:BsGlobe
}
const Platformicon=({platforms}:Props)=>
{
    
    return(
        <>
        
        <div className="d-flex flex-wrap">
        {platforms.map(platform=>{const Icn=iconMap[platform.slug];
        return <div className="me-3"><Icn/></div>})}
        </div>
        </>
    );
}
export default Platformicon;
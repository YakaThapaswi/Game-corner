import React from "react";
import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid, Fa500Px} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { platform } from "../hook/useGames";
import { IconType } from "react-icons/lib";
interface Props{
    platforms:platform[]|null;
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
    console.log(platforms)
    return(
        <>
        <div className="d-flex flex-wrap">
        {platforms&&platforms.map(platform=>{const Icn=iconMap[platform.slug]||Fa500Px;
        return <div className="me-3" key={platform.id}><Icn/></div>})}
        </div>
        </>
    );
}
export default Platformicon;
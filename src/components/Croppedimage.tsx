const Croppedimage=(url:string)=>
{
    const tar='media/';
    const ind=url.indexOf(tar)+tar.length;
    console.log(url.slice(0,ind)+'crop/100/100/'+url.slice(ind))
    return url.slice(0,ind)+'crop/100/100/'+url.slice(ind);
}
export default Croppedimage;
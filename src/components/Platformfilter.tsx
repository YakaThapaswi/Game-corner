import useData from "../hook/useData";
import { platform } from "../hook/useGames";
interface Props{
    selectedPlatform:(plat:platform)=>void
    onplatform:platform|null
}
const Platformfilter = ({selectedPlatform,onplatform}:Props) => {
    const {datas,error}=useData<platform>('/platforms/lists/parents')
    return (
        <>
            <div className="dropdown mb-3 me-4" >
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {onplatform?.name||'platforms'}
                </button>
                <ul className="dropdown-menu">
                    {datas.map((plat)=><li key={plat.id} onClick={()=>selectedPlatform(plat)}><p >{plat.name}</p></li>)}
                </ul>
            </div>
        </>
    );
}
export default Platformfilter;
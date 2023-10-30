import { Game } from "../hook/useGaming";
import './GameCard.css'
import Platformicon from "./platformicon";
import CriticScore from "./CriticScore";
import Croppedimage from "./Croppedimage";
interface Props {
    game: Game;
}
const GameCard = ({ game }: Props) => {
    console.log(game.name)
    return (
        <>
            <div className="card mb-3 col-3 me-6">
                <img src={game.background_image} className="card-img-top" height="250" alt="..."  ></img>
                
                <div className="card-body">
                    <h5 className="card-title">{game.name}</h5>
                    <div className="d-flex flex-wrap justify-content-sm-between">
                    <Platformicon platforms={game.parent_platforms.map(p=>p.platform)}></Platformicon>
                    <CriticScore score={game.metacritic}></CriticScore>
                    </div>
                </div>
                
            </div>



        </>
    )
}
export default GameCard;
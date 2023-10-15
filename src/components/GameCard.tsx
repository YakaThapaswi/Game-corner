import { Game } from "../hook/useGame";
import './GameCard.css'
import Platformicon from "./platformicon";
interface Props {
    game: Game;
}
const GameCard = ({ game }: Props) => {
    return (
        <>
            <div className="card mb-3 col-sm-2 ms-3">
                <img src={game.background_image} className="card-img-top" height="200" alt="..."  ></img>
                <div className="card-body">
                    <h5 className="card-title">{game.name}</h5>
                    <Platformicon platforms={game.parent_platforms.map(p=>p.platform)}></Platformicon>
                </div>
            </div>



        </>
    )
}
export default GameCard;
import { useEffect, useState } from "react"
import getAll from "./Catalogue-service"
import Game from "../Game/Game"

export default  function Catalogue(e) {
    
    let [games, changeGames] = useState([])
     useEffect(()=>{
       getAll()
       .then(arrGames=>changeGames(games=>arrGames))
     },[])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0
            ? games.map(game=><Game key={game._id} game={game}/>)
            : <h3 className="no-articles">No articles yet</h3>
            }

        </section>

    )


}
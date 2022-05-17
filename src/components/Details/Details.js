import { useParams } from "react-router-dom"
import singleGame from "./details-service"
import { useState,useEffect } from "react"

export default function Details(){
  let [game,changeState]=useState({})
  let id= useParams().id
  
  useEffect(()=>{
    singleGame(id)
    .then(game=>changeState(game))

  },[])
 
  return (
    <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>

            <p className="text">{game.summary}</p>
            
            <div className="buttons">
                <a href="#" className="button">Delete</a>
            </div>
        </div>
    </section>
  )

}
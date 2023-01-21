import React from "react";
import "../../styles/Tweetar.css"
import "../../styles/Tweet.css"
import Perfil from "./images/perfil.jpg"

export default function Tweetar() {
    return (
        <div className="estrutura">
        <div className="comment">
            <div className="imageComment">
                <img src={Perfil}/>
            </div>
            <div className="conteudoComment">
            <form action="...">
                <input type="text" id="comentario" placeholder="Tweet your reply"/>
            </form>
            </div>
        </div>
        </div>
   );
}
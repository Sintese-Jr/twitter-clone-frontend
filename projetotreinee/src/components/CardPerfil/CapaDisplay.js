import React from "react";
import "../../styles/cardperfil.css"
import capa from "./images/cardPerfil/capaTeste.jpg"

export default function CapaDisplay(props) {

    return (
        <div className="imagemcapa">
            <img src={props.srcImagemCapa}></img>
        </div>
    )
}